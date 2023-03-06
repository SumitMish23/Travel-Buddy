
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '31951ecba1mshf050333249e7232p120a75jsn76d57142662e',
		'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
	}
};
 export async function getPlacesData(coordinates){

 let response=await fetch(`https://booking-com.p.rapidapi.com/v1/hotels/search-by-coordinates?room_number=1&latitude=${coordinates.lat}&order_by=popularity&checkout_date=2023-08-19&units=metric&adults_number=2&filter_by_currency=AED&locale=en-gb&longitude=${coordinates.lng}&checkin_date=2023-08-18&children_ages=5%2C0&include_adjacency=true&children_number=2&page_number=0&categories_filter_ids=class%3A%3A2%2Cclass%3A%3A4%2Cfree_cancellation%3A%3A1`, options)
 let data =await response.json();
 return data;
    
 }
