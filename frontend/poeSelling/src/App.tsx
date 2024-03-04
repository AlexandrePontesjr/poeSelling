import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

function App() {


  return (
    <>
<nav className="bg-gray-800 p-4">
    <div className="max-w-7xl mx-auto flex justify-between items-center">
    <Avatar>
        <AvatarImage src="https://static.wikia.nocookie.net/pathofexile_gamepedia/images/5/58/Divine_Orb_inventory_icon.png" />
        <AvatarFallback>RTS</AvatarFallback>
    </Avatar>
        <div>
            <a href="#" className="text-white text-xl font-semibold">RenewTradeStore</a>
        </div>

        <div className="hidden md:flex space-x-4">
            <a href="#" className="text-white hover:text-gray-300">Home</a>
            <a href="#" className="text-white hover:text-gray-300">About</a>
            <a href="#" className="text-white hover:text-gray-300">Services</a>
            <a href="#" className="text-white hover:text-gray-300">Contact</a>
        </div>

        <div className="md:hidden">
            <button className="text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6">
                    <path fill-rule="evenodd" d="M3 5a1 1 0 0 1 1-1h12a1 1 0 0 1 0 2H4a1 1 0 0 1-1-1zm0 5a1 1 0 0 1 1-1h12a1 1 0 0 1 0 2H4a1 1 0 0 1-1-1zm0 5a1 1 0 0 1 1-1h12a1 1 0 0 1 0 2H4a1 1 0 0 1-1-1z" clip-rule="evenodd" />
                </svg>
            </button>
        </div>
    </div>
</nav>

  <div className="md:hidden bg-gray-800 p-4">
      <a href="#" className="block text-white py-2">Home</a>
      <a href="#" className="block text-white py-2">About</a>
      <a href="#" className="block text-white py-2">Services</a>
      <a href="#" className="block text-white py-2">Contact</a>
  </div>

      <div className="grid grid-flow-col auto-cols-fr" >
        <div>
        <img src="https://static.wikia.nocookie.net/pathofexile_gamepedia/images/e/ee/Headhunter_inventory_icon.png"/>
        </div>
        <div>
        <img src="https://static.wikia.nocookie.net/pathofexile_gamepedia/images/e/ee/Headhunter_inventory_icon.png"/>
        </div>
        <div>
        <img src="https://static.wikia.nocookie.net/pathofexile_gamepedia/images/e/ee/Headhunter_inventory_icon.png"/>
        </div>
        <div>
        <img src="https://static.wikia.nocookie.net/pathofexile_gamepedia/images/e/ee/Headhunter_inventory_icon.png"/>
        </div>
        <div>
        <img src="https://static.wikia.nocookie.net/pathofexile_gamepedia/images/e/ee/Headhunter_inventory_icon.png"/>
        </div>
        <div>
        <img src="https://static.wikia.nocookie.net/pathofexile_gamepedia/images/e/ee/Headhunter_inventory_icon.png"/>
        </div>
        <div>
        <img src="https://static.wikia.nocookie.net/pathofexile_gamepedia/images/e/ee/Headhunter_inventory_icon.png"/>
        </div>
      </div>
    </>
  );
}

export default App;