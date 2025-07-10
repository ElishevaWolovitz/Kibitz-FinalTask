import { Routes, Route } from 'react-router-dom';
import type { RouterProps } from './types';
import { partial } from 'lodash/fp';


const Router = ({routes, pages}: RouterProps) => {
    const setRoute = (pages: React.ComponentType[], path: string, i: number) => {
        const Page = pages[i];
        return (
            <Route
                path={path}
                element={<Page />}
            />
        )
    };
    return (
      <Routes>
        {routes.map(partial(setRoute, [pages]))}
      </Routes>
  )
}

export { Router }; 