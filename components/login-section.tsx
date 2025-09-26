export default function LoginSection() {
  return (
    <section className="py-16 bg-[#000c2a]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-white rounded-lg overflow-hidden shadow-xl flex flex-col md:flex-row min-h-[60vh]">
          {/* Left side - New Light Image */}
          {/* NOTE: The image is hidden on mobile for a better user experience. */}
          <div className="w-full md:w-1/2 hidden md:block">
            {/* Make sure the path to your image is correct. 
              I've used the filename 'image.png' which you uploaded.
            */}
            <img
              src="/images/12345.png"
              alt="A person using a modern computer interface"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Right side - Login Form */}
          <div className="w-full md:w-1/2 bg-[#00418d] p-8 flex items-center justify-center">
            <div className="w-full max-w-md">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">
                Sign in to Skill Kwiz
              </h2>

              <form className="space-y-4">
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full bg-gray-200 text-gray-800 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00a8e8]"
                  />
                </div>

                <div>
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full bg-gray-200 text-gray-800 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00a8e8]"
                  />
                </div>

                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center text-white">
                    <input type="checkbox" className="h-4 w-4 mr-2 rounded" />
                    Remember me
                  </label>
                  <a href="#" className="text-white hover:underline">
                    Forget Password?
                  </a>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#f73e5d] text-white p-3 rounded-md font-bold text-lg hover:bg-opacity-90 transition-all"
                >
                  Sign In
                </button>

                {/* --- NEW SIGN UP LINK --- */}
                <div className="text-center pt-2">
                  <p className="text-sm text-gray-300">
                    Don't have an account?{" "}
                    <a href="/signup" className="font-semibold text-yellow-400 hover:underline">
                      Sign Up
                    </a>
                  </p>
                </div>
                {/* --- END NEW SIGN UP LINK --- */}


                <div className="text-center text-white pt-4">
                  <p className="mb-2 text-sm">— Or Login with —</p>
                  <div className="flex justify-center space-x-4">
                    <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center transition-transform hover:scale-110">
                      {/* Google Icon SVG */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48">
                        <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" />
                        <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z" />
                        <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.223 0-9.657-3.657-11.303-8H6.306C9.656 39.663 16.318 44 24 44z" />
                        <path fill="#1976D2" d="M43.611 20.083H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571l6.19 5.238C42.012 36.49 44 30.638 44 24c0-1.341-.138-2.65-.389-3.917z" />
                      </svg>
                    </button>
                    
                  </div>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}