/* eslint-disable consistent-return */
import axios from "axios";

export const getPlacesData = async (type, sw, ne) => {
	try {
		const {
			data: { data },
		} = await axios.get(
			`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
			{
				params: {
					bl_latitude: sw.lat,
					bl_longitude: sw.lng,
					tr_longitude: ne.lng,
					tr_latitude: ne.lat,
				},
				headers: {
					"x-Rapidapi-Key":'f2642084c3mshebd6d0e19428c03p14a3b3jsnc7b61d04d7f6',
					"x-Rapidapi-Host":
						"travel-advisor.p.rapidapi.com",
				},
			}
		);

		return data;
	} catch (error) {
		console.log(error);
	}
};

export const getWeatherData = async (lat, lng) => {
	try {
		if (lat && lng) {
			const { data } = await axios.get(
				"https://community-open-weather-map.p.rapidapi.com/find",
				{
					params: { lat, lon: lng },
					headers: {
						"x-Rapidapi-Key":'f2642084c3mshebd6d0e19428c03p14a3b3jsnc7b61d04d7f6',
						"x-Rapidapi-Host":
							"community-open-weather-map.p.rapidapi.com",
					},
				}
			);

			return data;
		}
	} catch (error) {
		console.log(error);
	}
};
