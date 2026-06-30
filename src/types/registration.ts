export interface RegistrationForm {

  // STEP 1
  fullName: string
  instagram: string
  graduationYear: string
  email: string
  city: string

  // STEP 2
  university: string
  major: string
  job: string
  organizations: string[]

  // STEP 3
  photo: File | null

}