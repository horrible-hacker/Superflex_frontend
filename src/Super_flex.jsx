import { memo } from 'react';

function Login() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-background p-4">
      <div className="w-full max-w-[400px] bg-secondary/80 backdrop-blur">
        <div className="pt-6 px-6">
          <div className="space-y-6">
            <h1 className="text-2xl font-semibold text-center text-foreground">Login</h1>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="email" className="text-foreground">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="example@example.com"
                  className="bg-accent text-foreground"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="password" className="text-foreground">Password</label>
                <input 
                  type="password" 
                  id="password" 
                  className="bg-accent text-foreground"
                />
              </div>

              <div className="space-y-2">
                <button className="w-full bg-accent hover:bg-accent/90" variant="secondary">
                  Log In
                </button>
                <button className="w-full bg-accent hover:bg-accent/90" variant="secondary">
                  Sign Up
                </button>
              </div>

              <div className="text-center">
                <link to="/forgot-password" className="text-sm text-foreground hover:underline">
                  Forgot Password?
                </link>
              </div>

              <div className="space-y-4">
                <div className="text-center text-sm text-muted-foreground">
                  or sign up with
                </div>
                <div className="flex justify-center space-x-4">
                  <button variant="outline" size="icon" className="rounded-full w-10 h-10">
                    <img src="https://placehold.co/24x24?text=IG" alt="Instagram login" className="w-6 h-6" />
                  </button>
                  <button variant="outline" size="icon" className="rounded-full w-10 h-10">
                    <img src="https://placehold.co/24x24?text=G" alt="Google login" className="w-6 h-6" />
                  </button>
                  <button variant="outline" size="icon" className="rounded-full w-10 h-10">
                    <img src="https://placehold.co/24x24?text=FB" alt="Facebook login" className="w-6 h-6" />
                  </button>
                  <button variant="outline" size="icon" className="rounded-full w-10 h-10">
                    <img src="https://placehold.co/24x24?text=WA" alt="WhatsApp login" className="w-6 h-6" />
                  </button>
                </div>
              </div>

              <div className="text-center text-sm text-muted-foreground">
                Don't have an account? <link to="/signup" className="text-foreground hover:underline">Sign Up</link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default memo(Login);