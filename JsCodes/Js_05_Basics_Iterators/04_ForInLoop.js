// Object representing RTO passing data for different cities
let RtoPassing = {
    Malegaon: 41,   // RTO passing in Malegaon
    Nashik: 15,     // RTO passing in Nashik
    Pimpri: 14,     // RTO passing in Pimpri
    Pune: 12,       // RTO passing in Pune
    Shrirampur: 17  // RTO passing in Shrirampur
};

// Using 'for...in' loop to iterate through the keys of the RtoPassing object
for (let key in RtoPassing) {
    console.log(`${key}: ${RtoPassing[key]}`);  // Logs city name and corresponding passing number
}
// 'for...in' is used to loop over the keys (properties) of the object.
// In this case, it retrieves each city's name (key) and its corresponding RTO passing value.
