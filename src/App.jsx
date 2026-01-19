
import './App.css'

function App() {


  return (
    <>
      <div className="container text-white ">
        <div className=" h-screen overflow-hidden  md:grid grid-cols-4">
          <div className="hidden md:block md:col-span-1 md:p-4 bg-gray-800">

            
            <p className="mt-3 mb-12"> icon 1 </p>
            

            
            <p className="col-span-7 mb-4"> New Chat </p>
              
            

            <p className="mb-4">Scheduled actions </p>

            <p className="mb-8">Gems</p>

            <p className="mb-14">My Stuff</p>

            <p className="mb-4"> Chats </p>

            <p className="mb-4"> code analysis prep </p>
            <p className="mb-4"> code analysis prep what </p>
            <p className="mb-4"> code analysis prep </p>
            <p className="mb-4"> code analysis prep i do not know </p>
            <p className="mb-4"> code analysis prep </p>
            <p className="mb-4"> code analysis prep for you </p>

            
            <p className="fixed bottom-10">settings & help</p>



          </div>

          <div className="md:col-span-3 bg-gray-900 flex flex-col h-screen">

            <nav className="flex justify-between items-center p-4 shadow-md mb-8">
              <div class="text-xl font-bold text-blue-600">GeminiClone</div>

                <ul class="">
                  <li class="">Learn tailwind CSS</li>
                </ul>

              <div class="w-10 h-10 rounded-full bg-orange-200 flex items-center justify-center"> A </div>
            </nav>

            <div className="md:px-60 overflow-y-auto flex-1 mx-8 md:mx-0  mb-5 md:mb-15 text-pretty">

              <p className="mb-2 md:mb-8">A Hash Map (also called a Dictionary in Python or an Object in JavaScript) is one of the most powerful "super-tools" in a coder's belt.</p>
              <p className="mb-2 md:mb-8">Think of it as a super-powered filing cabinet.</p>
              <p className="mb-2 md:mb-8 text-2xl">1. The Real-World Analogy</p>
              <p className="mb-2 md:mb-8">Imagine a normal List (Array). If you want to find a specific person's phone number in a list of 1,000,000 people, you have to start at the beginning and check every single name until you find the right one. This is slow.</p>
              <p className="mb-2 md:mb-8">In a Hash Map, you don't search. You use a Key (the name) to jump directly to the Value (the phone number). It happens almost instantly, regardless of whether you have 10 names or 10 billion.</p>
              <hr className="mb-2 md:mb-8"></hr>
              <p className="mb-2 md:mb-8 text-2xl" >2. How it works (The "Magic" Part)</p>
              <p className="mb-2 md:mb-8">A Hash Map uses a Hash Function.</p>
              <p className="mb-2 md:mb-8 md:ms-8">1. You give it a Key (like the string "Apple").</p>
              <p className="mb-2 md:mb-8 md:ms-8">2. The Hash Function does some math on those letters and turns them into a specific number (like 42).</p>
              <p className="mb-2 md:mb-8 md:ms-8">3. The computer stores the data at "Slot 42."</p>
              <p className="mb-2 md:mb-8 text-2xl">3. Why Coders Love Them</p>
              <p className="mb-2 md:mb-8"> In the world of Big O Notation (how we measure speed), Hash Maps are $O(1)$.</p>
             

            </div>


            <div className="flex justify-center mb-15">
              <div className=" w-2/3 py-10 bg-gray-800 rounded-3xl">
                <p className="text-left ms-5"> |Ask Anything..</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </>
  )
}

export default App
