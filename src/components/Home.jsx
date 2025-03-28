import heroImage from "../assets/homes.jpg";

import { FaMapMarkerAlt, FaClock, FaTicketAlt } from "react-icons/fa";
// import Venezuela from "../assets/vene.png";
// import Conmebol from "../assets/conmebol.png";

import { useState, useMemo, useEffect, useCallback } from "react";
import KeyPerformers from "./Performer";
import Kit2024 from "./Kit";
import CoachProfile from "./Coach";

const Home = () => {
  const matchDay = useMemo(
    () => [
      // {
      //   date: "2024-10-11",
      //   opponent: "Venezuela",
      //   time: "02:45",
      //   venue: "Estadio Monumental de Maturín, Venezuela",
      //   opponentLogo: Venezuela,
      //   competition: Conmebol,
      // },
    ],
    []
  );

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { month: "short", day: "2-digit", year: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  const calculateCountdown = (matchDate) => {
    const now = new Date();
    const timeDifference = new Date(matchDate) - now;

    if (timeDifference <= 0) return { hours: 0, minutes: 0, seconds: 0 };

    const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeDifference / 1000 / 60) % 60);
    const seconds = Math.floor((timeDifference / 1000) % 60);

    return { hours, minutes, seconds };
  };

  const [todayMatches, setTodayMatches] = useState([]);
  const [countdowns, setCountdowns] = useState({});

  const getTodayMatches = useCallback(() => {
    const today = new Date();
    return matchDay.filter((match) => {
      const matchDate = new Date(match.date);
      return (
        today.getFullYear() === matchDate.getFullYear() &&
        today.getMonth() === matchDate.getMonth() &&
        today.getDate() === matchDate.getDate()
      );
    });
  }, [matchDay]);

  useEffect(() => {
    setTodayMatches(getTodayMatches());
  }, [getTodayMatches]);

  useEffect(() => {
    const timer = setInterval(() => {
      const newCountdowns = matchDay.reduce((acc, match) => {
        acc[match.opponent] = calculateCountdown(`${match.date}T${match.time}`);
        return acc;
      }, {});
      setCountdowns(newCountdowns);
    }, 1000);

    return () => clearInterval(timer);
  }, [matchDay]);

  return (
    <section className="bg-[#f0f8ff] text-gray-800 py-12 lg:py-24">
      <div className="relative container mx-auto px-4 lg:px-8">
        {todayMatches.length > 0 && (
          <div className="bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#1b3c42] mb-8">
              Match Day
            </h2>

            <div className="flex flex-col items-center gap-8">
              {todayMatches.map((match, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-xl flex flex-col md:flex-row items-center justify-between max-w-4xl w-full"
                >
                  {/* Match Details */}
                  <div className="flex flex-col items-center md:items-start md:flex-row gap-4 md:gap-8 w-full">
                    <div className="flex items-center flex-col md:flex-row gap-4">
                      <img
                        src={match.opponentLogo}
                        alt={`${match.opponent} Logo`}
                        className="w-20 h-20 rounded-full border-2 border-gray-300"
                      />
                      <div className="text-center md:text-left">
                        <h3 className="text-xl font-bold text-blue-800 mb-1">
                          {match.opponent}
                        </h3>
                        <p className="text-gray-600">
                          {formatDate(match.date)}
                        </p>
                        <div className="flex items-center gap-2 text-gray-700 mt-2">
                          <FaClock />
                          <span>{match.time}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-700 mt-1">
                          <FaMapMarkerAlt />
                          <span>{match.venue}</span>
                        </div>
                      </div>
                    </div>

                    {/* Square Timer */}
                    <div className="flex items-center justify-center mt-4 md:mt-0">
                      <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                        <div className="grid grid-cols-3 gap-2">
                          <div className="bg-white p-3 rounded-md text-center">
                            <div className="text-2xl font-bold text-blue-900">
                              {countdowns[match.opponent]?.hours || "00"}
                            </div>
                            <div className="text-xs text-gray-600">Hours</div>
                          </div>
                          <div className="bg-white p-3 rounded-md text-center">
                            <div className="text-2xl font-bold text-blue-900">
                              {countdowns[match.opponent]?.minutes || "00"}
                            </div>
                            <div className="text-xs text-gray-600">Minutes</div>
                          </div>
                          <div className="bg-white p-3 rounded-md text-center">
                            <div className="text-2xl font-bold text-blue-900">
                              {countdowns[match.opponent]?.seconds || "00"}
                            </div>
                            <div className="text-xs text-gray-600">Seconds</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action and Competition */}
                  <div className="flex flex-col items-center text-[#1b3c42] md:items-end mt-4 md:mt-0">
                    <a
                      href="https://www.mancity.com/tickets"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-red-600 to-orange-600 text-white text-lg px-4 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center gap-3"
                    >
                      <FaTicketAlt className="text-2xl" />
                      <span>Buy Tickets</span>
                    </a>

                    <div className="mt-4 flex items-center">
                      <p className="text-sm font-bold text-[#1b3c42] mr-2">
                        Competition:
                      </p>
                      <img
                        src={match.competition}
                        alt="Competition Logo"
                        className="w-14 h-14"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Hero Image */}
        <div className="relative h-96 mb-12">
          <img
            src={heroImage}
            alt="Hero"
            className="w-full h-full object-cover rounded-3xl shadow-md"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-60 rounded-3xl"></div>
          <div className="absolute bottom-0 left-0 p-8 text-white">
            <h1 className="text-6xl font-bold">Argentina</h1>
            <p className="text-lg font-medium mt-3 ">
              Blue and White, Heart and Soul
            </p>
          </div>
        </div>
         {/* Key Performers Section */}
         <KeyPerformers />
        <CoachProfile />
       
        <Kit2024 />
      </div>
    </section>
  );
};

export default Home;
