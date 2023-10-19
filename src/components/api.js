
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a9333e717fmsh3b7741a255b60d6p14f4b4jsn75e89e2dad03',
    	'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
	}
};

export const getHotelData = async (hotelID, checkin_date, checkout_date) => {
	const url = (hotelID, checkin_date, checkout_date) =>{
		const formattedCheckInDate = new Date(checkin_date).toISOString().split('T')[0];
		const formattedCheckOutDate = new Date(checkout_date).toISOString().split('T')[0];
	
		return `https://booking-com.p.rapidapi.com/v2/hotels/details?hotel_id=${hotelID}&currency=USD&locale=en-gb&checkout_date=${formattedCheckOutDate}&checkin_date=${formattedCheckInDate}`;
	}
	try{
		const response = await fetch(url(hotelID, checkin_date, checkout_date), options);
		const result = await response.json();
		return result;
	} catch(error){
		console.error(error);
	}
}

const hotels = (destID, inDate, outDate) => {
	const formattedCheckInDate = new Date(inDate).toISOString().split('T')[0];
    const formattedCheckOutDate = new Date(outDate).toISOString().split('T')[0];
	
	const URL = `https://booking-com.p.rapidapi.com/v1/hotels/search?checkin_date=${formattedCheckInDate}&dest_type=city&units=metric&checkout_date=${formattedCheckOutDate}&adults_number=2&order_by=popularity&dest_id=${destID}&filter_by_currency=USD&locale=en-gb&room_number=1&order_by=popularity&&include_adjacency=true`;

	return URL;
};

export async function getLocation(location){
	const url = (location) => `https://booking-com.p.rapidapi.com/v1/hotels/locations?name=${location}&locale=en-gb`;
	
	try {
		const response = await fetch(url(location), options);
		const result = await response.json();
		return result;
	} catch (error) {
		console.error(error);
	}
};

export async function getHotelPhotos(hotelID){
	const url = (hotelID) => `https://booking-com.p.rapidapi.com/v1/hotels/photos?hotel_id=${hotelID}&locale=en-gb`;

	try{
		const response = await fetch(url(hotelID), options);
		const result = await response.json();
		return result;
	} catch (error){
		console.error(error);
	}
}

export async function getHotels(destID,inDate,outDate){
	try {
		const response = await fetch(hotels(destID,inDate,outDate), options);
		const result = await response.json();
		return result;
	} catch (error) {
		console.error(error);
	}
};
