
import { HomePageDataResponse } from "services/types";

export type HomePageProps = {
	pagedata: {
		data_type: 'home'
	} & HomePageDataResponse;
	isLoading: boolean;
}
