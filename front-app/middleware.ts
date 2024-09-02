import { withAuth } from "next-auth/middleware"


export default withAuth({
  // Matches the pages config in `[...nextauth]`
  pages: {
    signIn: 'auth/test-signin',
  }
})

export const config = { matcher: ["/((?!api|auth|_next).*)"] }