import { useState } from 'react'
import './App.css'
import CardHolder from './components/CardHolder'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
  <img class="w-24 h-24 rounded-full mx-auto" src="https://images.pexels.com/photos/17683947/pexels-photo-17683947/free-photo-of-brunette-woman-in-white-blouse-and-black-maxi-skirt-leaning-on-a-tree.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" width="384" height="512" />
  <div class="pt-6 space-y-4">
    <blockquote>
      <p class="text-lg">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption>
      <div>
        Sarah Dayan
      </div>
      <div>
        Staff Engineer, Algolia
      </div>
    </figcaption>
  </div>
</figure>
    <h1 className='bg-green-400 rounded-xl m-4'>cardComponent</h1>
    <CardHolder username={"doberman"} textbtn={"click me"}/>
    <CardHolder username={"pug"} />
    </>
  )
}

export default App
