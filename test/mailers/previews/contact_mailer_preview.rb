# Preview all emails at http://localhost:3000/rails/mailers/contacts_mailer
class ContactMailerPreview < ActionMailer::Preview

  # Preview this email at http://localhost:3000/rails/mailers/contacts_mailer/signup_confirmations
  def signup_confirmations
    ContactMailer.signup_confirmations
  end

end
