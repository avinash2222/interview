/* Role in desc order priority */
const ROLE_ENUM = ['SUPER_ADMIN', 'ADMIN', 'PROFESSIONAL', 'CUSTOMER']
const DEFAULT_ROLE = 'CUSTOMER'

// server/roles.js
import AccessControl from 'accesscontrol'
const ac = new AccessControl()

const roles = function() { 
  ac.grant('CUSTOMER')
    .createOwn(['order', 'caretePaymentRequest', 'comment', 'question'])
    .readOwn(['user', 'order', 'getUserAllPayments', 'questions'])
    .updateOwn(['user', 'order', 'updateUser', 'logout', 'LikeCountOnArticle', 'questions'])
    .deleteOwn(['user', 'deleteFile'])

  ac.grant('PROFESSIONAL')
    .createOwn(['order', 'caretePaymentRequest', 'faq', 'article', 'comment'])
    .readOwn(['user', 'lead', 'order', 'getUserAllPayments'])
    .updateOwn(['user', 'professional', 'order', 'ordermarkdone', 'updateUser', 'logout'])
    .deleteOwn(['user', 'professional', 'deleteFile'])

  ac.grant('ADMIN')
    .extend([ 
      'CUSTOMER',
      'PROFESSIONAL',
    ])
    .createAny(['user', 'image', 'operatingLocation', 'product', 'service', 'createTermsAndCondition'])
    .readAny(['user', 'order', 'adminAccess', 'contact', 'questions',
      'searchUser', 'getPaymentRequest', 'getPaymentDetails', 'getTCMapping', 'faq', 'article', 'getUsers',
    ])
    .updateAny(['user', 'adminAccess', 'image', 'contact', 'operatingLocation', 'order', 'updateTermsAndCondition', 'updateTCMapping'])
    .deleteAny(['user', 'image', 'contact', 'operatingLocation', 'order', 'product', 'service',  'deleteUser',  'removeProfessionals', 'deleteTermsAndCondition',
      'questions', 'deleteTCMapping'])

  ac.grant('SUPER_ADMIN')
    .extend(['ADMIN'])
    .createAny(['tenant'])
    .readAny('tenant')
    .updateAny(['tenant', 'updatePayment'])
    .deleteAny(['tenant', 'deletePayment', 'deleteUser'])

  return ac
}()

module.exports = {
  ROLE_ENUM: ROLE_ENUM,
  DEFAULT_ROLE: DEFAULT_ROLE,
  roles: roles,
}
