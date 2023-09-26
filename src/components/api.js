
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8fd9ac38eemsha20403a81d3bec1p1cccecjsnd3a289871000',
		'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
	}
};

const url = (location) => {
	return `https://booking-com.p.rapidapi.com/v1/hotels/locations?name=${location}&locale=en-gb`;
};

const hotels = (destID) => {
	return `https://booking-com.p.rapidapi.com/v1/hotels/search?checkin_date=2023-09-27&dest_type=city&units=metric&checkout_date=2023-09-28&adults_number=2&order_by=popularity&dest_id=${destID}&filter_by_currency=USD&locale=en-gb&room_number=1&children_number=2&children_ages=5%2C0&categories_filter_ids=class%3A%3A2%2Cclass%3A%3A4%2Cfree_cancellation%3A%3A1&page_number=0&include_adjacency=true`;
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

export async function getHotels(destID){
	try {
		const response = await fetch(hotels(destID), options);
		const result = await response.json();
		console.log(result)
		return result;
	} catch (error) {
		console.error(error);
	}
};
