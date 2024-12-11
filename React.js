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
// const videos = [
//   { id:1,
//     img: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-8.png?raw=true",
//     disc: "1Bulbuli |Coke Studio Bangla |",
//      disc2: "Season One | Ritu Raj X Nandita", 
//      img2: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(1).png?raw=true", 
//      img3: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true",
//      lowdisc1:"Coke Srudio Bangla",
//      lowdisc2:"1.5Mviews • 2Days ago"},
//     { id:1,
//       img: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-8.png?raw=true",
//       disc: "1Bulbuli |Coke Studio Bangla |",
//        disc2: "Season One | Ritu Raj X Nandita", 
//        img2: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(1).png?raw=true", 
//        img3: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true",
//        lowdisc1:"Coke Srudio Bangla",
//        lowdisc2:"1.5Mviews • 2Days ago"},
//        { id:1,
//         img: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-8.png?raw=true",
//         disc: "1Bulbuli |Coke Studio Bangla |",
//          disc2: "Season One | Ritu Raj X Nandita", 
//          img2: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(1).png?raw=true", 
//          img3: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true",
//          lowdisc1:"Coke Srudio Bangla",
//          lowdisc2:"1.5Mviews • 2Days ago"},
//        { id:2,
//         img: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-8.png?raw=true",
//         disc: "1Bulbuli |Coke Studio Bangla |",
//          disc2: "Season One | Ritu Raj X Nandita", 
//          img2: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(1).png?raw=true", 
//          img3: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true",
//          lowdisc1:"Coke Srudio Bangla",
//          lowdisc2:"1.5Mviews • 2Days ago",
//          cname:"subpart1",
//         h:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/live.png?raw=true"},
//         { id:1,
//           img: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-8.png?raw=true",
//           disc: "1Bulbuli |Coke Studio Bangla |",
//            disc2: "Season One | Ritu Raj X Nandita", 
//            img2: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(1).png?raw=true", 
//            img3: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true",
//            lowdisc1:"Coke Srudio Bangla",
//            lowdisc2:"1.5Mviews • 2Days ago"},
//            { id:2,
//             img: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-8.png?raw=true",
//             disc: "1Bulbuli |Coke Studio Bangla |",
//              disc2: "Season One | Ritu Raj X Nandita", 
//              img2: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(1).png?raw=true", 
//              img3: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true",
//              lowdisc1:"Coke Srudio Bangla",
//              lowdisc2:"1.5Mviews • 2Days ago",
//              cname:"subpart1",
//             h:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/live.png?raw=true"},
//            { id:1,
//             img: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-8.png?raw=true",
//             disc: "1Bulbuli |Coke Studio Bangla |",
//              disc2: "Season One | Ritu Raj X Nandita", 
//              img2: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(1).png?raw=true", 
//              img3: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true",
//              lowdisc1:"Coke Srudio Bangla",
//              lowdisc2:"1.5Mviews • 2Days ago"},
//              { id:1,
//               img: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-8.png?raw=true",
//               disc: "1Bulbuli |Coke Studio Bangla |",
//                disc2: "Season One | Ritu Raj X Nandita", 
//                img2: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(1).png?raw=true", 
//                img3: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true",
//                lowdisc1:"Coke Srudio Bangla",
//                lowdisc2:"1.5Mviews • 2Days ago"},
//                { id:1,
//                 img: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-8.png?raw=true",
//                 disc: "1Bulbuli |Coke Studio Bangla |",
//                  disc2: "Season One | Ritu Raj X Nandita", 
//                  img2: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(1).png?raw=true", 
//                  img3: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true",
//                  lowdisc1:"Coke Srudio Bangla",
//                  lowdisc2:"1.5Mviews • 2Days ago"},
//                  { id:1,
//                   img: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-8.png?raw=true",
//                   disc: "1Bulbuli |Coke Studio Bangla |",
//                    disc2: "Season One | Ritu Raj X Nandita", 
//                    img2: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(1).png?raw=true", 
//                    img3: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true",
//                    lowdisc1:"Coke Srudio Bangla",
//                    lowdisc2:"1.5Mviews • 2Days ago"},
//                    { id:1,
//                     img: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-8.png?raw=true",
//                     disc: "1Bulbuli |Coke Studio Bangla |",
//                      disc2: "Season One | Ritu Raj X Nandita", 
//                      img2: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(1).png?raw=true", 
//                      img3: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true",
//                      lowdisc1:"Coke Srudio Bangla",
//                      lowdisc2:"1.5Mviews • 2Days ago"},
//                      { id:1,
//                       img: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-8.png?raw=true",
//                       disc: "1Bulbuli |Coke Studio Bangla |",
//                        disc2: "Season One | Ritu Raj X Nandita", 
//                        img2: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(1).png?raw=true", 
//                        img3: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true",
//                        lowdisc1:"Coke Srudio Bangla",
//                        lowdisc2:"1.5Mviews • 2Days ago"},


//     // Repeat for other videos
// ];

const videos=[

  {
    "kind": "youtube#searchListResponse",
    "etag": "VeTVc5k5AAaBGf6EXf09o7FqLvY",
    "nextPageToken": "CAoQAA",
    "regionCode": "IN",
    "pageInfo": {
        "totalResults": 1000000,
        "resultsPerPage": 10
    },
    "items": [
        {
            "kind": "youtube#searchResult",
            "etag": "XSSF622Mjs-Evmx7hEWkk005bio",
            "id": {
                "kind": "youtube#video",
                "videoId": "3B0rYACI9wg"
            },
            "snippet": {
                "publishedAt": "2024-12-10T20:00:02Z",
                "channelId": "UC0v-tlzsn0QZwJnkiaUSJVQ",
                "title": "These Songs Turn 20 in 2025! (Mariah Carey, Green Day, Usher)",
                "description": "We found 20 songs that were released 20 years ago in 2005! Does that make you feel old? Subscribe to @React for new videos ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/3B0rYACI9wg/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/3B0rYACI9wg/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/3B0rYACI9wg/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "REACT",
                "liveBroadcastContent": "none",
                "publishTime": "2024-12-10T20:00:02Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "MP1DtDsESHoIXeIFsk56cKk_lFg",
            "id": {
                "kind": "youtube#video",
                "videoId": "SqcY0GlETPk"
            },
            "snippet": {
                "publishedAt": "2023-03-12T08:00:07Z",
                "channelId": "UCWv7vMbMWH4-V0ZXdmDpPBA",
                "title": "React Tutorial for Beginners",
                "description": "Master React 18 with TypeScript! ⚛️ Build amazing front-end apps with this beginner-friendly tutorial. Want the ultimate React ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/SqcY0GlETPk/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/SqcY0GlETPk/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/SqcY0GlETPk/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Programming with Mosh",
                "liveBroadcastContent": "none",
                "publishTime": "2023-03-12T08:00:07Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "Hy2umpo4d-Eh-7rHO7PK9HB_CoY",
            "id": {
                "kind": "youtube#video",
                "videoId": "Gg6fmnbfzgc"
            },
            "snippet": {
                "publishedAt": "2024-12-10T06:38:46Z",
                "channelId": "UCg_3UBALPSoZ4_mXlVSLuqw",
                "title": "Zawhna 73 With Lalnuna // RamBoss React",
                "description": "A Link : https://youtu.be/kMhN5EqOces?si=XXthRvGnbHF1S0x7.",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/Gg6fmnbfzgc/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/Gg6fmnbfzgc/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/Gg6fmnbfzgc/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Zo Siam",
                "liveBroadcastContent": "none",
                "publishTime": "2024-12-10T06:38:46Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "bWI_j-RZUzKecthXDGbm8qGH0pw",
            "id": {
                "kind": "youtube#video",
                "videoId": "eILUmCJhl64"
            },
            "snippet": {
                "publishedAt": "2023-11-04T02:25:41Z",
                "channelId": "UC7uzuZJIYzcxV9JJ1yAtHHg",
                "title": "🚀🔥 React &amp; Redux Complete Course (2024) with Projects | Notes | Free Certification",
                "description": "For MERN stack admission queries, message us or WhatsApp on +91-8000121313 - GitHub Code Repo: ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/eILUmCJhl64/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/eILUmCJhl64/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/eILUmCJhl64/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Complete Coding by Prashant Sir",
                "liveBroadcastContent": "none",
                "publishTime": "2023-11-04T02:25:41Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "SaV4szDaWJtoUZBbymTameW37OI",
            "id": {
                "kind": "youtube#video",
                "videoId": "E6tAtRi82QY"
            },
            "snippet": {
                "publishedAt": "2024-10-07T14:30:10Z",
                "channelId": "UCc7gpqMnnOSbU_F2-5MVVZw",
                "title": "Complete React JS Course | MERN Stack Development",
                "description": "Master ReactJS | MERN Stack – Boost Your Web Development Skills! In this video, we dive deep into ReactJS logic, ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/E6tAtRi82QY/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/E6tAtRi82QY/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/E6tAtRi82QY/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Sheryians Coding School",
                "liveBroadcastContent": "none",
                "publishTime": "2024-10-07T14:30:10Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "GNlDGAzbaSNsEw5DDMNA86WaTYg",
            "id": {
                "kind": "youtube#video",
                "videoId": "B_z6L-QyzgA"
            },
            "snippet": {
                "publishedAt": "2024-12-07T16:00:14Z",
                "channelId": "UC0v-tlzsn0QZwJnkiaUSJVQ",
                "title": "Guess The Song From The Iconic Music Video!",
                "description": "We challenged the reactors to guess the song from the iconic music video! Subscribe to @React for more videos every week!",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/B_z6L-QyzgA/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/B_z6L-QyzgA/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/B_z6L-QyzgA/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "REACT",
                "liveBroadcastContent": "none",
                "publishTime": "2024-12-07T16:00:14Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "DMjx4e6OBgLuAbc_PnpypKFGJMk",
            "id": {
                "kind": "youtube#video",
                "videoId": "x4rFhThSX04"
            },
            "snippet": {
                "publishedAt": "2024-11-20T18:25:12Z",
                "channelId": "UC8butISFwT-Wl7EV0hUK0BQ",
                "title": "Learn React JS - Full Beginner’s Tutorial (2024) &amp; Practice Projects",
                "description": "Learn modern React basics in the most interactive, hands-on way possible in the full course for beginners. Throughout this tutorial ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/x4rFhThSX04/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/x4rFhThSX04/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/x4rFhThSX04/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "freeCodeCamp.org",
                "liveBroadcastContent": "none",
                "publishTime": "2024-11-20T18:25:12Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "xojCeTztMI_nmv9tDqzJen6Du2s",
            "id": {
                "kind": "youtube#video",
                "videoId": "HM0yI8adFJI"
            },
            "snippet": {
                "publishedAt": "2024-11-27T20:00:10Z",
                "channelId": "UC0v-tlzsn0QZwJnkiaUSJVQ",
                "title": "Guess The Song In The First Five Seconds!",
                "description": "Scott Kress joins us in the studio to guess the song in the first five seconds! Subscribe to @React for new videos every week!",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/HM0yI8adFJI/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/HM0yI8adFJI/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/HM0yI8adFJI/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "REACT",
                "liveBroadcastContent": "none",
                "publishTime": "2024-11-27T20:00:10Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "uryk6W_s8PGd8o_jJgFjulmD80c",
            "id": {
                "kind": "youtube#video",
                "videoId": "CgkZ7MvWUAA"
            },
            "snippet": {
                "publishedAt": "2024-01-16T15:55:09Z",
                "channelId": "UC4SVo0Ue36XCfOyb5Lh1viQ",
                "title": "React Full Course for free ⚛️ (2024)",
                "description": "reactjs #course #tutorial This is a beginners React JS course that should be enough to get you started using the React Library.",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/CgkZ7MvWUAA/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/CgkZ7MvWUAA/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/CgkZ7MvWUAA/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Bro Code",
                "liveBroadcastContent": "none",
                "publishTime": "2024-01-16T15:55:09Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "WE3gP2lM9xK_I-k4fny7o1np-7U",
            "id": {
                "kind": "youtube#video",
                "videoId": "Uv7cKlZFXU8"
            },
            "snippet": {
                "publishedAt": "2023-05-12T16:05:30Z",
                "channelId": "UCEdNYjOHEiwA1kiPoI5igKw",
                "title": "React Js Tutorial for beginners in Tamil 2024 |Full Course for Beginners |Basic to Advanced concepts",
                "description": "More Free Courses: balachandra.in #reactjsfullcourse #tamil #tamilprogramming #webdevelopmenttraining ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/Uv7cKlZFXU8/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/Uv7cKlZFXU8/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/Uv7cKlZFXU8/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Balachandra",
                "liveBroadcastContent": "none",
                "publishTime": "2023-05-12T16:05:30Z"
            }
        }
    ]
}
]



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
