import { useEffect, useState , useRef} from "react";
import notificationSound from "../assets/notificationSound.wav";

const purchases = [
  { name: "Rahul", city: "Delhi" },
  { name: "Aman", city: "Mumbai" },
  { name: "Priya", city: "Bangalore" },
  { name: "Rohit", city: "Pune" },
  { name: "Sneha", city: "Hyderabad" },
  { name: "Arjun", city: "Chennai" },
  { name: "Neha", city: "Kolkata" },
  { name: "Vikram", city: "Jaipur" },
  { name: "Karan", city: "Ahmedabad" },
  { name: "Anjali", city: "Lucknow" },

  { name: "Rakesh", city: "Indore" },
  { name: "Pooja", city: "Bhopal" },
  { name: "Manish", city: "Surat" },
  { name: "Aditi", city: "Nagpur" },
  { name: "Deepak", city: "Patna" },
  { name: "Shreya", city: "Kanpur" },
  { name: "Nitin", city: "Chandigarh" },
  { name: "Varun", city: "Noida" },
  { name: "Megha", city: "Gurgaon" },
  { name: "Abhishek", city: "Ghaziabad" },

  { name: "Saurabh", city: "Faridabad" },
  { name: "Ritu", city: "Meerut" },
  { name: "Harsh", city: "Agra" },
  { name: "Simran", city: "Amritsar" },
  { name: "Tarun", city: "Ludhiana" },
  { name: "Kunal", city: "Jalandhar" },
  { name: "Divya", city: "Udaipur" },
  { name: "Prakash", city: "Jodhpur" },
  { name: "Tanya", city: "Kota" },
  { name: "Yash", city: "Alwar" },

  { name: "Aditya", city: "Raipur" },
  { name: "Ankit", city: "Bilaspur" },
  { name: "Riya", city: "Ranchi" },
  { name: "Shivam", city: "Dhanbad" },
  { name: "Vivek", city: "Jamshedpur" },
  { name: "Nisha", city: "Guwahati" },
  { name: "Pankaj", city: "Shillong" },
  { name: "Sonali", city: "Imphal" },
  { name: "Raj", city: "Aizawl" },
  { name: "Kavita", city: "Itanagar" },

  { name: "Rohan", city: "Thane" },
  { name: "Naveen", city: "Nashik" },
  { name: "Bhavesh", city: "Rajkot" },
  { name: "Dhruv", city: "Vadodara" },
  { name: "Isha", city: "Jamnagar" },
  { name: "Ankur", city: "Bhavnagar" },
  { name: "Komal", city: "Gwalior" },
  { name: "Lokesh", city: "Ujjain" },
  { name: "Pritam", city: "Satna" },
  { name: "Kishore", city: "Sagar" },

  { name: "Mohit", city: "Dehradun" },
  { name: "Kartik", city: "Haridwar" },
  { name: "Ayesha", city: "Roorkee" },
  { name: "Shalini", city: "Haldwani" },
  { name: "Ajay", city: "Shimla" },
  { name: "Bhavna", city: "Manali" },
  { name: "Dinesh", city: "Dharamshala" },
  { name: "Rashmi", city: "Solan" },
  { name: "Ravi", city: "Kullu" },
  { name: "Seema", city: "Palampur" },

  { name: "Sunil", city: "Tirupati" },
  { name: "Lakshmi", city: "Vijayawada" },
  { name: "Karthik", city: "Visakhapatnam" },
  { name: "Swathi", city: "Warangal" },
  { name: "Mahesh", city: "Nellore" },
  { name: "Sandeep", city: "Kurnool" },
  { name: "Pradeep", city: "Anantapur" },
  { name: "Jyoti", city: "Mysore" },
  { name: "Harini", city: "Hubli" },
  { name: "Ganesh", city: "Belgaum" },

  { name: "Aakash", city: "Coimbatore" },
  { name: "Saranya", city: "Madurai" },
  { name: "Vijay", city: "Salem" },
  { name: "Arvind", city: "Trichy" },
  { name: "Rituparna", city: "Siliguri" },
  { name: "Anup", city: "Howrah" },
  { name: "Debashish", city: "Durgapur" },
  { name: "Soma", city: "Asansol" },
  { name: "Tapan", city: "Kharagpur" },
  { name: "Sudip", city: "Haldia" },

  { name: "Faizan", city: "Aligarh" },
  { name: "Wasim", city: "Moradabad" },
  { name: "Imran", city: "Bareilly" },
  { name: "Sameer", city: "Varanasi" },
  { name: "Zaid", city: "Prayagraj" },
  { name: "Arif", city: "Gorakhpur" },
  { name: "Nadeem", city: "Saharanpur" },
  { name: "Shadab", city: "Muzaffarnagar" },
  { name: "Faisal", city: "Rampur" },
  { name: "Yusuf", city: "Bijnor" },
];



const LivePurchase = () => {
  const [current, setCurrent] = useState(null);
  const [visible, setVisible] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const random = purchases[Math.floor(Math.random() * purchases.length)];

      setCurrent(random);
      setVisible(true);

      // 🔊 Play sound
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.play().catch(() => {});
      }

      setTimeout(() => {
        setVisible(false);
      }, 5000);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  if (!current) return null;

  return (
    <>
      <audio ref={audioRef} src={notificationSound} preload="auto" />

      <div
        className={`fixed bottom-6 left-6 z-50 transition-all duration-500 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        <div className="bg-black/80 backdrop-blur-xl border border-white/10 px-5 py-3 rounded-xl shadow-xl max-w-xs">
          <p className="text-sm text-white">
            <span className="font-semibold">{current.name}</span> from{" "}
            <span className="text-purple-400">{current.city}</span>
          </p>

          <p className="text-xs text-gray-400">
            just purchased the bundle
          </p>
        </div>
      </div>
    </>
  );
};

export default LivePurchase;