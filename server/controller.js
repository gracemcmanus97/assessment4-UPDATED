const fortune =["Don't hold onto this, that require a tight grip.", "You didn't come this far only to come this far.", "Vulnerability sounds like faith and looks like courage."];

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    }
    ,
    getFortune: (req, res) => {
        
        // choose random fortune
        let randomIndex1 = Math.floor(Math.random() * fortune.length);
        let randomFortune = fortune[randomIndex1];
      
        res.status(200).send(randomFortune);
    }
    ,
    getInspiration: (req, res) => {
        const inspiration = ["You are strong and smart enough!", "You can do whatever you set your mind to!", "Keep pushing forward!"];
      
        // choose random inspiration
        let randomIndex2 = Math.floor(Math.random() * inspiration.length);
        let randomInspiration = inspiration[randomIndex2];
      
        res.status(200).send(randomInspiration);
    }
    ,
    getColor: (req, res) => {
        const color = ["Amaranth is the color for you!", "Celadon is stunning!", "Feldgrau is perfect is you're feeling a moody neutral!"];
      
        // choose random color
        let randomIndex2 = Math.floor(Math.random() * color.length);
        let randomColor = color[randomIndex3];
      
        res.status(200).send(randomColor);
    }
    ,
    getSong: (req, res) => {
        const song = ["As Time Goes By by Jimmy Durante", "Mona Lisa by Nat King Cole", "La Vie en rose by Edith Piaf"];
      
        // choose random song
        let randomIndex2 = Math.floor(Math.random() * song.length);
        let randomSong = song[randomIndex4];
      
        res.status(200).send(randomSong);
    }
    ,
    addFortune: (req, res) => {
        console.log(req.body)
    }
}