// import { ProtectedRoute } from '@/entities/session';

// import { SentryRoutes } from '@/shared/libs';

// const TemplateDetailsPage = lazy(() => import('@/pages/template-details'));
// const TemplateEditorPage = lazy(() => import('@/pages/template-editor'));
// const TemplatesListPage = lazy(() => import('@/pages/templates-list'));
// const TemplateShowPage = lazy(() => import('@/pages/template-show'));

export const Routing = () => {};

// export function Routing({ children }: { children?: ReactNode }) {
//     return (
// <>
//     <SentryRoutes>
//         <Route
//             path="/"
//             element={<ProtectedRoute outlet={<TemplatesListPage />} />}
//         />
//         <Route
//             path="/details/:templateId"
//             element={
//                 <ProtectedRoute outlet={<TemplateDetailsPage />} />
//             }
//         />
//         <Route
//             path="/edit/:templateId"
//             element={
//                 <ProtectedRoute
//                     outlet={<TemplateEditorPage isNew={false} />}
//                 />
//             }
//         />
//         <Route
//             path="/create"
//             element={
//                 <ProtectedRoute
//                     outlet={<TemplateEditorPage isNew={true} />}
//                 />
//             }
//         />
//         <Route
//             path="/view/:templateId"
//             element={<TemplateShowPage />}
//         />
//         <Route
//             path="*"
//             element={
//                 <ProtectedRoute
//                     outlet={<Navigate to="/" replace={true} />}
//                 />
//             }
//         />
//     </SentryRoutes>
//     {children}
// </>
//     );
// }
