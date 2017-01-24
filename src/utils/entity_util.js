import _ from 'lodash';

function initEntityIfBlank(entity, jurisdictionName) {
  if (!entity.selfDisclosure || !entity.selfDisclosure.entity_id) {
    entity.selfDisclosure = {
      org_id: entity.organizationId,
      legal_entity_id: entity._id,
      entity_id: entity._id,
      organization_name: null,
      legal_entity_name: entity.name,
      multibranch_entity: null,
      legal_address: {
        address_line1: null,
        address_city: null,
        address_state_or_province: null,
        address_country: null,
        address_postal_code: null
      },
      contact: {
        contact_name: null,
        contact_email: null,
        contact_phone: null
      }
    };
  }
  if (!entity.selfDisclosure.jurisdiction) {
    entity.selfDisclosure.jurisdiction = {};
  }
  const jurisdiction = entity.selfDisclosure.jurisdiction;
  if (jurisdictionName && !jurisdiction[jurisdictionName]) {
    jurisdiction[jurisdictionName] = {}
  }
  if (jurisdictionName && !jurisdiction[jurisdictionName].average_notional) {
    jurisdiction[jurisdictionName].average_notional = {}
  }
}

export function initEntity(entity, jurisdictionName) {
  const initializedEntity = _.cloneDeep(entity || {});
  initEntityIfBlank(initializedEntity, jurisdictionName)
  return initializedEntity
}

export function getEntityChangeHandler(entityChangeHandler, jurisdictionName) {
  return function(entityChangeHandlerCallback) {
    return entityChangeHandler(function(entity, val) {
      initEntityIfBlank(entity, jurisdictionName);
      entityChangeHandlerCallback(entity, val)
    });
  }
}

export function getAverageNotionalChangeHandler(entityChangeHandler, jurisdictionName) {
  return function(averageNotionalChangeCallback) {
    return entityChangeHandler(function(entity, val) {
      initEntityIfBlank(entity, jurisdictionName)
      averageNotionalChangeCallback(entity.selfDisclosure.jurisdiction[jurisdictionName].average_notional, val)
    })
  }
}
