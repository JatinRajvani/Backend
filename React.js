// const express = require("express");
// const cors = require("cors");
// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Mock Data
// const videos = [
//     {    id:1,
//         img: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-8.png?raw=true",
//         img2: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(1).png?raw=true",
//         title: "Title of the Video",
//         views: "12,000,000 views",
//         channel: "Channel Name",
//         date: "Date",
//     },
//     {    id:2,
//         img: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-8.png?raw=true",
//         img2: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(1).png?raw=true",
//         title: "Title of the Video",
//         views: "12,000,000 views",
//         channel: "Channel Name",
//         date: "Date",
//     },
//     {    id:1,
//         img: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-8.png?raw=true",
//         img2: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(1).png?raw=true",
//         title: "Title of the Video",
//         views: "12,000,000 views",
//         channel: "Channel Name",
//         date: "Date",
//     },
//     {    id:1,
//         img: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-8.png?raw=true",
//         img2: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(1).png?raw=true",
//         title: "Title of the Video",
//         views: "12,000,000 views",
//         channel: "Channel Name",
//         date: "Date",
//     },
//     {    id:2,
//         img: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-8.png?raw=true",
//         img2: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(1).png?raw=true",
//         title: "Title of the Video",
//         views: "12,000,000 views",
//         channel: "Channel Name",
//         date: "Date",
//     },

  
// ];

// // Routes
// app.get("/videos", (req, res) => {
//   if (videos && videos.length > 0) {
//     console.log("Videos fetched successfully.");
//     res.status(200).json(videos);  // Sending the full video data
//   } else {
//     console.error("No videos found.");
//     res.status(404).send("Videos not found");
//   }
// });

// // Start Server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });

const express = require("express");
const cors = require("cors");
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Mock Data
const videos = [
  { id:1,
    img: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-8.png?raw=true",
    disc: "1Bulbuli |Coke Studio Bangla |",
     disc2: "Season One | Ritu Raj X Nandita", 
     img2: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(1).png?raw=true", 
     img3: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true",
     lowdisc1:"Coke Srudio Bangla",
     lowdisc2:"1.5Mviews • 2Days ago"},
    { id:1,
      img: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-8.png?raw=true",
      disc: "1Bulbuli |Coke Studio Bangla |",
       disc2: "Season One | Ritu Raj X Nandita", 
       img2: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(1).png?raw=true", 
       img3: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true",
       lowdisc1:"Coke Srudio Bangla",
       lowdisc2:"1.5Mviews • 2Days ago"},
       { id:1,
        img: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-8.png?raw=true",
        disc: "1Bulbuli |Coke Studio Bangla |",
         disc2: "Season One | Ritu Raj X Nandita", 
         img2: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(1).png?raw=true", 
         img3: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true",
         lowdisc1:"Coke Srudio Bangla",
         lowdisc2:"1.5Mviews • 2Days ago"},
       { id:2,
        img: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-8.png?raw=true",
        disc: "1Bulbuli |Coke Studio Bangla |",
         disc2: "Season One | Ritu Raj X Nandita", 
         img2: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(1).png?raw=true", 
         img3: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true",
         lowdisc1:"Coke Srudio Bangla",
         lowdisc2:"1.5Mviews • 2Days ago",
         cname:"subpart1",
        h:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/live.png?raw=true"},
        { id:1,
          img: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-8.png?raw=true",
          disc: "1Bulbuli |Coke Studio Bangla |",
           disc2: "Season One | Ritu Raj X Nandita", 
           img2: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(1).png?raw=true", 
           img3: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true",
           lowdisc1:"Coke Srudio Bangla",
           lowdisc2:"1.5Mviews • 2Days ago"},
           { id:2,
            img: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-8.png?raw=true",
            disc: "1Bulbuli |Coke Studio Bangla |",
             disc2: "Season One | Ritu Raj X Nandita", 
             img2: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(1).png?raw=true", 
             img3: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true",
             lowdisc1:"Coke Srudio Bangla",
             lowdisc2:"1.5Mviews • 2Days ago",
             cname:"subpart1",
            h:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/live.png?raw=true"},
           { id:1,
            img: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-8.png?raw=true",
            disc: "1Bulbuli |Coke Studio Bangla |",
             disc2: "Season One | Ritu Raj X Nandita", 
             img2: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(1).png?raw=true", 
             img3: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true",
             lowdisc1:"Coke Srudio Bangla",
             lowdisc2:"1.5Mviews • 2Days ago"},
             { id:1,
              img: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-8.png?raw=true",
              disc: "1Bulbuli |Coke Studio Bangla |",
               disc2: "Season One | Ritu Raj X Nandita", 
               img2: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(1).png?raw=true", 
               img3: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true",
               lowdisc1:"Coke Srudio Bangla",
               lowdisc2:"1.5Mviews • 2Days ago"},
               { id:1,
                img: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-8.png?raw=true",
                disc: "1Bulbuli |Coke Studio Bangla |",
                 disc2: "Season One | Ritu Raj X Nandita", 
                 img2: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(1).png?raw=true", 
                 img3: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true",
                 lowdisc1:"Coke Srudio Bangla",
                 lowdisc2:"1.5Mviews • 2Days ago"},
                 { id:1,
                  img: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-8.png?raw=true",
                  disc: "1Bulbuli |Coke Studio Bangla |",
                   disc2: "Season One | Ritu Raj X Nandita", 
                   img2: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(1).png?raw=true", 
                   img3: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true",
                   lowdisc1:"Coke Srudio Bangla",
                   lowdisc2:"1.5Mviews • 2Days ago"},
                   { id:1,
                    img: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-8.png?raw=true",
                    disc: "1Bulbuli |Coke Studio Bangla |",
                     disc2: "Season One | Ritu Raj X Nandita", 
                     img2: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(1).png?raw=true", 
                     img3: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true",
                     lowdisc1:"Coke Srudio Bangla",
                     lowdisc2:"1.5Mviews • 2Days ago"},
                     { id:1,
                      img: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-8.png?raw=true",
                      disc: "1Bulbuli |Coke Studio Bangla |",
                       disc2: "Season One | Ritu Raj X Nandita", 
                       img2: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(1).png?raw=true", 
                       img3: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true",
                       lowdisc1:"Coke Srudio Bangla",
                       lowdisc2:"1.5Mviews • 2Days ago"},


    // Repeat for other videos
];

// Routes
app.get("/videos", (req, res) => {
  if (videos && videos.length > 0) {
    console.log("Videos fetched successfully.");
    res.status(200).json(videos);  // Sending the full video data
  } else {
    console.error("No videos found.");
    res.status(404).send("Videos not found");
  }
});

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
