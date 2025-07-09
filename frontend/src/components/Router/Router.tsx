import { Routes, Route } from 'react-router-dom';
import type { RouterProps } from './types';
import { map, partial } from 'lodash/fp'

const Router = ({routes, pages}: RouterProps) => {
    const setRoute = (pages: React.ComponentType[], path: string, i: number) => {
        const Page = pages[i];
        return (
            <Route
                key={path}
                path={path}
                element={<Page />}
            />
        )
    };
    return (
      <Routes>
        {map(partial(setRoute, [pages]), routes)}
      </Routes>
  )
}

export { Router }; 