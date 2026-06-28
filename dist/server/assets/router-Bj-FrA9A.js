import { Outlet, createFileRoute, createRootRoute, createRouter, lazyRouteComponent } from "@tanstack/react-router";
import { jsx } from "react/jsx-runtime";
import { QueryClient } from "@tanstack/react-query";
//#region src/routes/__root.tsx
var Route$1 = createRootRoute({ component: () => /* @__PURE__ */ jsx(Outlet, {}) });
//#endregion
//#region src/routes/index.tsx
var $$splitComponentImporter = () => import("./routes-DVY29te4.js");
//#endregion
//#region src/routeTree.gen.ts
var rootRouteChildren = { IndexRoute: createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Mayur Akalwadi — Business Development Manager & Senior Business Analyst" },
		{
			name: "description",
			content: "Executive portfolio of Mayur Akalwadi: 8+ years driving ERP transformation, SAP MM/WM/EWM, supply chain optimization and industrial product strategy."
		},
		{
			property: "og:title",
			content: "Mayur Akalwadi — ERP & Business Transformation Leader"
		},
		{
			property: "og:description",
			content: "Bridging complex industrial product architecture and enterprise-scale efficiency."
		},
		{
			property: "og:image",
			content: portraitAsset.url
		},
		{
			name: "twitter:image",
			content: portraitAsset.url
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
}).update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$1
}) };
var routeTree = Route$1._addFileChildren(rootRouteChildren)._addFileTypes();
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
