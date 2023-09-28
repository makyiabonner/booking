
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4f71c663dfmshcb231e4b1acf127p1ab93bjsn1e0b82789c4e',
		'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
	}
};

const url = (location) => {
	return `https://booking-com.p.rapidapi.com/v1/hotels/locations?name=${location}&locale=en-gb`;
};

const hotels = (destID, inDate, outDate) => {
	const formattedCheckInDate = new Date(inDate).toISOString().split('T')[0];
    const formattedCheckOutDate = new Date(outDate).toISOString().split('T')[0];

	const URL = `https://booking-com.p.rapidapi.com/v1/hotels/search?checkin_date=${formattedCheckInDate}&dest_type=city&units=metric&checkout_date=${formattedCheckOutDate}&adults_number=2&order_by=popularity&dest_id=${destID}&filter_by_currency=USD&locale=en-gb&room_number=1&order_by=popularity&&include_adjacency=true`;

	return URL;
};

export async function getLocation(location){
	try {
		const response = await fetch(url(location), options);
		const result = await response.json();
		return result;
	} catch (error) {
		console.error(error);
	}
};

export async function getHotels(destID,inDate,outDate){
	try {
		const response = await fetch(hotels(destID,inDate,outDate), options);
		const result = await response.json();
		return result;
	} catch (error) {
		console.error(error);
	}
};
