class SignInPage {
  elements = {
    signUpLink : () => cy.get('a[href="/signup"]'),
    emailField : () => cy.get("#email"),
    passwordField : () => cy.get('#password'),
    submitButton : () => cy.get('input[data-testid="regular-login-submit"]'),
    messageToast : () => cy.get('.alert-message')
}

messages = {
  loginSuccessMessage : 'Welcome back!'
}

goToSignUp() {
  this.elements.signUpLink().click()
  return this
}

signIn(email, password) {
  this.elements.emailField().type(email)
  this.elements.passwordField().type(password)
  this.elements.submitButton().click()
  return this
}
verifySuccessMessage() {
  this.elements.messageToast().should('have.text', this.messages.loginSuccessMessage)
  return this
}


} export default SignInPage;