import AuthModal from "@/app/components/Modals/AuthModal";
import NavBar from "@/app/components/Navbar";


const AuthPage = () => {

  return (
    <div className="bg-linear-to-b from-gray-400 to-black h-screen relative">
      <div className="max-w-7xl mx-auto">
        <NavBar />

        <div className="flex items-center justify-center h-[calc(100vh-5rem)] pointer-events-none select-none">
          <img src="/hero.png" alt="Hero img" width={700} height={700} />
        </div>

        <AuthModal />
      </div>
    </div>
  );
};

export default AuthPage;
