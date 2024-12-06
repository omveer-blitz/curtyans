import { CollectionPageDataResponse } from "services/types";

export type CollectionPageProps = {
	pagedata: {
		data_type: 'collection',
	} & CollectionPageDataResponse
	isLoading: boolean;
}
