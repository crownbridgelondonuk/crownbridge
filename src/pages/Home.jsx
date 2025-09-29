import "../home.css"

import Header from "./components/Header"
import WhyFoundation from "./components/WhyFoundation"
import WhereNext from "./components/WhereNext"
import Banner from "./components/Banner"
import USP from "./components/USP"
import FAQ from "./components/FAQ"
import WhoShouldJoin from "./components/WhoShouldJoin"
import SkipALevels from "./components/SkipALevels"
import Unsure from "./components/Unsure"

export default function Home() {
  return (
    <div id="home">
      <Header />
      <WhyFoundation />
      <WhereNext />
      <Banner />
      <USP />
      <FAQ />
      <WhoShouldJoin />
      <section className="CTA" aria-label="Call to action section">
        <SkipALevels />
        <hr role="separator" />
        <Unsure />
      </section>
    </div>
  )
}
