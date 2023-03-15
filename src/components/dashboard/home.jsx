import { Component } from "react";


import NavBar from "../nav";
import Footer from "../footer";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      imageIndex: 0,
      images: [
        "https://mango-tel.oss-eu-central-1.aliyuncs.com/mango4g/7011040341347153115ae1c34-bbac-443a-8a79-b2728c2c08ae..jpg",
        "https://mango-tel.oss-eu-central-1.aliyuncs.com/mango4g/701109078367215325786741b-1080-4b92-bb92-6142f63a41ea..jpg",
        "https://mango-tel.oss-eu-central-1.aliyuncs.com/mango4g/701101689808678879bec2973-55d2-4328-831b-e4dac3a7f935..jpg",
        "https://mango-tel.oss-eu-central-1.aliyuncs.com/mango4g/701104432934942450a908ab6-deab-4462-a750-f5225ea85ff4..jpg",
        "https://mango-tel.oss-eu-central-1.aliyuncs.com/mango4g/7011036485902508832d0c0b1-40e0-46d6-acc9-501b975dbd34..jpg",
        "https://mango-tel.oss-eu-central-1.aliyuncs.com/mango4g/701101985308320223ea183e8-5b8e-4464-9a54-1bbc41b3dbbb..jpg",
        "https://mango-tel.oss-eu-central-1.aliyuncs.com/mango4g/701102671597924789959ecde-031d-4b2e-83df-7090e5201adb..jpg",
      ],
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      if (this.state.imageIndex > this.state.images.length - 2) {
        this.setState({ imageIndex: 0 });
      } else {
        this.setState({ imageIndex: this.state.imageIndex + 1 });
      }
      console.log(this.state.imageIndex);
    }, 2000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <>
        <NavBar />
        <header class=" max-w-screen-full h-96">
          <div class="container flex flex-col px-4 py-6 mx-auto  lg:h-[28rem] lg:py-8 lg:flex-row lg:items-center">
            <div class="">
              <img
                class="w-auto h-auto"
                src={this.state.images[this.state.imageIndex]}
                alt=""
              ></img>
            </div>
          </div>
        </header>

        <h2 className="text-black  ml-80 mt-10  font-semibold  capitalize">
          Phones & Devices
        </h2>
        <h2 className="text-black text-3xl ml-80 mt-2  font-semibold  capitalize">
          Best Deals
        </h2>

        <section className="bg-white-900">
          <div className="grid  h-[550px] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 lg:items-center">
            <div class="flex flex-col items-center justify-start w-full max-w-sm mx-auto py-2">
              <div class=" card1 w-full h-72 mt-16 bg-white  bg-cover cursor-pointer rounded-lg hover:shadow-md hover:shadow-white-500">
                <img
                  class=" w-76 h-full max-w-3xl rounded-md"
                  src="https://mango-tel.oss-eu-central-1.aliyuncs.com/mango4g/8003309364772685814a347e9-9044-48a6-8368-2010706a610b..jpg"
                  alt=""
                ></img>
              </div>
              <div class="w-56 -mt-10 overflow-hidden bg-white  shadow-lg md:w-64 dark:bg-white-800">
                <h3 class="tracking-wide  text-black-200  dark:text-white">
                  TECHNO Pop6 GO
                </h3>

                <div class="flex items-center justify-between px-3 py-2 bg-white-200 dark:bg-white-700">
                  <span class="font-bold text-black-800 dark:text-black-200">
                    RWF 87,500
                  </span>
                </div>
                <button class="px-2 py-1 text-xs  text-white-600 uppercase transition-colors duration-300 transform bg-orange-700 rounded hover:bg-white-700 hover:text-orange-600 dark:hover:bg-orange-600 focus:bg-white-700 dark:focus:bg-white-600 focus:outline-none">
                  view Detail
                </button>
              </div>
            </div>

           

            <div class="flex flex-col items-center justify-start w-full max-w-sm mx-auto py-2">
              <div class=" card2 w-full h-72 mt-16 bg-white  cursor-pointer  rounded-lg hover:shadow-md hover:shadow-white-500">
                <img
                  class=" w-76 h-full max-w-3xl rounded-md"
                  src="https://mango-tel.oss-eu-central-1.aliyuncs.com/mango4g/80032873358967206a5e6e7a4-215e-4192-82cf-bf6e50cb01c3..jpg"
                  alt=""
                ></img>
              </div>
              <div class="w-56 -mt-10 overflow-hidden bg-white  shadow-lg md:w-64 dark:bg-white-800">
                <h3 class="tracking-wide text-black-200 dark:text-white">
                  TECHNO Camon 19
                </h3>

                <div class="flex items-center justify-between px-3 py-2 bg-white-200 dark:bg-white-700">
                  <span class="font-bold text-gray-800 dark:text-gray-200">
                    Rwf 215,000
                  </span>
                </div>
                <button class="px-2 py-1 text-xs  text-white-600 uppercase transition-colors duration-300 transform bg-orange-700 rounded hover:bg-white-700 hover:text-orange-600 dark:hover:bg-orange-600 focus:bg-white-700 dark:focus:bg-white-600 focus:outline-none">
                  view Detail
                </button>
              </div>
            </div>

           
            <div class="flex flex-col items-center justify-start w-full max-w-sm mx-auto py-2">
              <div class=" card2 w-full h-72 mt-16 bg-white  cursor-pointer  rounded-lg hover:shadow-md hover:shadow-white-500">
                <img
                  class=" w-76 h-full max-w-3xl rounded-md"
                  src="https://mango-tel.oss-eu-central-1.aliyuncs.com/mango4g/799551912489930899b19776d-6f9e-4575-abb3-5ccbcfab23e8..jpg"
                  alt=""
                ></img>
              </div>
              <div class="w-56 -mt-10 overflow-hidden bg-white  shadow-lg md:w-64 dark:bg-white-800">
                <h3 class="tracking-wide text-black-200 dark:text-white">
                  SAMSUNG A04e
                </h3>

                <div class="flex items-center justify-between px-3 py-2 bg-white-200 dark:bg-white-700">
                  <span class="font-bold text-gray-800 dark:text-gray-200">
                    Rwf 135,000
                  </span>
                </div>
                <button class="px-2 py-1 text-xs  text-white-600 uppercase transition-colors duration-300 transform bg-orange-700 rounded hover:bg-white-700 hover:text-orange-600 dark:hover:bg-orange-600 focus:bg-white-700 dark:focus:bg-white-600 focus:outline-none">
                  view Detail
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-orange-600">
          <h2 className="text-white  ml-80 mt-2  font-semibold  capitalize">
            4G INTERNET
          </h2>
          <h2 className="text-white text-3xl ml-80 mt-2  font-semibold  capitalize">
            Hot Packs
          </h2>
          <div className="grid  h-[550px] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 lg:items-center">
            <div class="flex flex-col items-center justify-start w-full max-w-sm mx-auto py-2">
              <div class=" card1 w-full h-80 mt-16 bg-white  bg-cover cursor-pointer rounded-lg hover:shadow-md hover:shadow-white-500">
                <h1 class="text-black dark:text-white  mt-2 font-semibold capitalize">
                  Daily 300MB
                </h1>
                <h1 class="text-black dark:text-white  mt-2 ">4G + Speed</h1>
              </div>
              <div class="w-10 -mt-16 overflow-hidden bg-white  shadow-lg md:w-80 dark:bg-white-800">
                <p class="tracking-wide  text-black-200  dark:text-white">
                  4G + Speed
                </p>
              </div>
              <div class="flex items-center  content-center justify-between  bg-white-200 dark:bg-white-700">
                <span class="font-bold text-black-800 dark:text-black-200">
                  RWF 190
                </span>
              </div>
            </div>

           

            <div class="flex flex-col items-center justify-start w-full max-w-sm mx-auto py-2">
              <div class=" card1 w-full h-80 mt-16 bg-white  bg-cover cursor-pointer rounded-lg hover:shadow-md hover:shadow-white-500">
                <h1 class="text-black dark:text-white  mt-2 font-semibold capitalize">
                  Daily 500MB
                </h1>
                <h1 class="text-black dark:text-white  mt-2 ">4G + Speed</h1>
              </div>
              <div class="w-10 -mt-16 overflow-hidden bg-white  shadow-lg md:w-80 dark:bg-white-800">
                <p class="tracking-wide  text-black-200  dark:text-white">
                  4G + Speed
                </p>
              </div>
              <div class="flex items-center  content-center justify-between  bg-white-200 dark:bg-white-700">
                <span class="font-bold text-black-800 dark:text-black-200">
                  RWF 350
                </span>
              </div>
            </div>
         
            <div class="flex flex-col items-center justify-start w-full max-w-sm mx-auto py-2">
              <div class=" card1 w-full h-80 mt-16 bg-white  bg-cover cursor-pointer rounded-lg hover:shadow-md hover:shadow-white-500">
                <h1 class="text-black dark:text-white  mt-2 font-semibold capitalize">
                  Daily 1GB
                </h1>
                <h1 class="text-black dark:text-white  mt-2 ">4G + Speed</h1>
              </div>
              <div class="w-10 -mt-16 overflow-hidden bg-white  shadow-lg md:w-80 dark:bg-white-800">
                <p class="tracking-wide  text-black-200  dark:text-white">
                  4G + Speed
                </p>
              </div>
              <div class="flex items-center  content-center justify-between  bg-white-200 dark:bg-white-700">
                <span class="font-bold text-black-800 dark:text-black-200">
                  RWF 590
                </span>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </>
    );
  }
}

export default Home;
