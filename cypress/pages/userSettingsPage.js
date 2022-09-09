class UserSettingsPage {
  elements = {
    userAvatarAttachment : () => cy.get("#user_avatar"),
    submitButton : () => cy.get('input[data-testid="onboarding-submit-about-you-form"'),
    messageToast : () => cy.get('.toast-body'),
}
messages = {
  accountUpdateSuccessMessage : 'Account updated successfully'
}

updateUserAvatar(img_path) {
  this.elements.userAvatarAttachment().attachFile(img_path)
  this.elements.submitButton().click()
  return this
} 

verifySuccessMessage() {
  this.elements.messageToast().should('have.text', this.messages.accountUpdateSuccessMessage)
  return this
}

} export default UserSettingsPage;