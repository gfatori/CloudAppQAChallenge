class UserDashboardPage {
  elements = {
    myAvatarButton : () => cy.get("#avatar"),
    signOutButton : () => cy.get('a[data-testid="dropdown-link-sign_out"'),
    userSettingsButton : () => cy.get('a[data-testid="dropdown-link-settings"'),
    messageToast : () => cy.get('.alert')
}

messages = {
  logoutSuccessMessage : "Successfully Logged Out"
}

signOut() {
  this.elements.myAvatarButton().click()
  this.elements.signOutButton().click()
  return this
}

verifySuccessMessage() {
  this.elements.messageToast().should('have.text', this.messages.logoutSuccessMessage)
  return this
}

goToUserSettingsPage() {
  this.elements.myAvatarButton().click()
  this.elements.userSettingsButton().click()
}

} export default UserDashboardPage;