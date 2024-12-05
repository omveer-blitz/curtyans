import { InitialData } from './types';
/**
 * reads data from pathname/page-data.json file using (fetch method) and then return it
 * @param routes
 * @param pathname
 */
export declare function loadStaticProps(pathname: string): Promise<{
    data: InitialData;
}>;
