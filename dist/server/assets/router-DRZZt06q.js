import { Outlet, createRootRoute, createRouter } from "@tanstack/react-router";
import { jsx } from "react/jsx-runtime";
import { QueryClient } from "@tanstack/react-query";
var routeTree = createRootRoute({ component: () => /* @__PURE__ */ jsx(Outlet, {}) })._addFileChildren({})._addFileTypes();
//#endregion
//#region src/router.tsx
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
