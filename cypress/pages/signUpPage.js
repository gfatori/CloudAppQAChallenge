class SignUpPage {
  
  elements = {
    emailField : () => cy.get("#email"),
    passwordField : () => cy.get('#password'),
    submitButton : () => cy.get('input[data-testid="regular-signup-submit"]'),
    messageToast : () => cy.get('.toast-body'),
    cloudAppLogo : () => cy.get('img.cloudapp-logo')
}

  messages = {
    accountCreationSuccessMessage : 'Account created successfully'
  }

  signUp(email, password) {
    this.elements.emailField().type(email)
    this.elements.passwordField().type(password)
    this.elements.submitButton().click()
    return this
  }

  verifySuccessMessage() {
    this.elements.messageToast().should('have.text', this.messages.accountCreationSuccessMessage)
    return this
  }

  goToDashboard() {
    this.elements.cloudAppLogo().click()
  }
} 

export default SignUpPage;