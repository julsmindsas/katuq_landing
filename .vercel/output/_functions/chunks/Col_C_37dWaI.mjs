import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, s as spreadAttributes, b as addAttribute, e as renderComponent, u as unescapeHTML, F as Fragment, d as renderSlot, f as renderScript, l as renderHead } from './astro/server_DxIRt11M.mjs';
import 'kleur/colors';
import { getIconData, iconToSVG } from '@iconify/utils';
/* empty css                       */
import 'clsx';
/* empty css                          */
/* empty css                           */
/* empty css                       */

const icons = {"local":{"prefix":"local","lastModified":1749594440,"icons":{"arrow-path-rounded-square":{"body":"<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" d=\"M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3\"/>"},"arrow-treding-up":{"body":"<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" d=\"M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941\"/>"},"arrow-trending-up":{"body":"<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" d=\"M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.942\"/>"},"bell":{"body":"<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" d=\"M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0\"/>"},"bell-alert":{"body":"<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" d=\"M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5\"/>"},"bolt":{"body":"<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" d=\"m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z\"/>"},"book":{"body":"<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" d=\"M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25\"/>"},"bug-ant":{"body":"<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" d=\"M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0 1 12 12.75Zm0 0c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 0 1-1.152 6.06M12 12.75c-2.883 0-5.647.508-8.208 1.44a23.91 23.91 0 0 0 1.153 6.06M12 12.75a2.25 2.25 0 0 0 2.248-2.354M12 12.75a2.25 2.25 0 0 1-2.248-2.354M12 8.25c.995 0 1.971-.08 2.922-.236.403-.066.74-.358.795-.762a3.778 3.778 0 0 0-.399-2.25M12 8.25c-.995 0-1.97-.08-2.922-.236-.402-.066-.74-.358-.795-.762a3.734 3.734 0 0 1 .4-2.253M12 8.25a2.25 2.25 0 0 0-2.248 2.146M12 8.25a2.25 2.25 0 0 1 2.248 2.146M8.683 5a6.032 6.032 0 0 1-1.155-1.002c.07-.63.27-1.222.574-1.747M8.683 5a3.75 3.75 0 0 1 6.635 0m0 0c.427-.283.815-.62 1.155-.999a4.471 4.471 0 0 0-.575-1.752M4.921 6a24.048 24.048 0 0 0-.392 3.314 23.88 23.88 0 0 0 5.223 1.082M19.08 6c.205 1.08.337 2.187.392 3.314a23.882 23.882 0 0 1-5.223 1.082\"/>"},"chart-pie":{"body":"<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\"><path d=\"M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z\"/><path d=\"M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z\"/></g>"},"chat-bubble-left-ellipsis":{"body":"<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" d=\"M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z\"/>"},"chat-bubble-left-right":{"body":"<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" d=\"M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3a49.5 49.5 0 0 1-4.02-.163 2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155\"/>"},"chat-bubbles":{"body":"<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" d=\"M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3a49.5 49.5 0 0 1-4.02-.163 2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155\"/>"},"check-circle":{"body":"<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25z\" clip-rule=\"evenodd\"/>"},"chevron-down":{"body":"<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z\" clip-rule=\"evenodd\"/>","width":16,"height":16},"chevron-left":{"body":"<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" d=\"M15.75 19.5 8.25 12l7.5-7.5\"/>"},"circle-stack":{"body":"<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" d=\"M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125\"/>"},"cliboard-document-check":{"body":"<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" d=\"M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15a2.25 2.25 0 0 1 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75\"/>"},"clipboard-document-list":{"body":"<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" d=\"M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15a2.25 2.25 0 0 1 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z\"/>"},"computer-desktop":{"body":"<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" d=\"M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25\"/>"},"credit-card":{"body":"<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" d=\"M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z\"/>"},"cube-transparent":{"body":"<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" d=\"m21 7.5-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3 2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25\"/>"},"cursor-arrow-ripple":{"body":"<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" d=\"M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672Zm-7.518-.267A8.25 8.25 0 1 1 20.25 10.5M8.288 14.212A5.25 5.25 0 1 1 17.25 10.5\"/>"},"device-phone-mobile":{"body":"<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" d=\"M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3\"/>"},"discord-icon":{"body":"<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M18.956 7.523a1.471 1.471 0 0 0-1.44-1.01c-3.788.128-7.081 1.207-8.484 1.735a2.828 2.828 0 0 0-1.384 1.107C6.132 11.682 1.35 20.14 1.502 33.982c.01.887.377 1.76 1.1 2.335 1.453 1.154 4.624 3.3 9.67 4.838.862.263 1.862.024 2.413-.783.682-1 1.278-2.252 1.687-3.202a.57.57 0 0 1 .683-.313c1.79.523 4.096.922 6.958.922 2.852 0 5.148-.397 6.933-.917a.57.57 0 0 1 .683.313c.408.95 1.004 2.2 1.685 3.197.55.807 1.55 1.046 2.413.783 5.046-1.538 8.216-3.684 9.669-4.838.724-.575 1.091-1.448 1.101-2.335.149-13.73-4.554-22.162-6.109-24.57a2.91 2.91 0 0 0-1.503-1.168c-1.501-.52-4.956-1.588-8.4-1.729a1.464 1.464 0 0 0-1.443 1.008l-.507 1.514c-.086.256-.385.436-.7.378-.82-.152-2.119-.321-3.822-.321-1.714 0-3.026.171-3.852.323-.314.058-.61-.12-.696-.376l-.509-1.518ZM21 25c0 2.761-2.015 5-4.5 5S12 27.761 12 25s2.015-5 4.5-5 4.5 2.239 4.5 5Zm10.5 5c-2.485 0-4.5-2.239-4.5-5s2.015-5 4.5-5 4.5 2.239 4.5 5-2.015 5-4.5 5Z\" clip-rule=\"evenodd\"/>","width":48,"height":48},"document-chart-bar":{"body":"<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" d=\"M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25M9 16.5v.75m3-3v3M15 12v5.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z\"/>"},"document-text":{"body":"<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" d=\"M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z\"/>"},"empty-star":{"body":"<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" d=\"M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.563.563 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.563.563 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5z\"/>"},"eye":{"body":"<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\"><path d=\"M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z\"/><path d=\"M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z\"/></g>"},"eye-slash":{"body":"<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" d=\"M3.98 8.223A10.477 10.477 0 0 0 1.934 12c1.292 4.338 5.31 7.5 10.066 7.5.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88\"/>"},"fb-icon":{"body":"<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M37.25 3.302c-.2-1.116-1.199-1.805-2.262-1.798-2.727.017-5.195.1-7.355.466-2.162.367-4.049 1.024-5.595 2.213-3.045 2.341-4.6 6.604-4.666 14.139h-5.417c-1.03 0-2.01.652-2.212 1.745-.23 1.245-.412 3.244.013 5.734.2 1.164 1.238 1.931 2.367 1.931h5.247v16.655c0 .83.465 1.672 1.413 1.853.718.137 1.847.26 3.592.26 1.742 0 2.972-.122 3.797-.256 1.079-.176 1.706-1.125 1.706-2.125V27.732h7.054c1.094 0 2.124-.723 2.329-1.866.413-2.304.213-4.39-.017-5.71-.197-1.128-1.2-1.834-2.279-1.834H27.88c.013-1.61.087-2.866.266-3.85.196-1.08.51-1.784.96-2.267.445-.479 1.077-.795 2.023-.993.955-.2 2.185-.271 3.784-.293 1.1-.014 2.14-.747 2.342-1.901a16.564 16.564 0 0 0-.005-5.716Z\" clip-rule=\"evenodd\"/>","width":48,"height":48},"filled-star":{"body":"<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z\" clip-rule=\"evenodd\"/>"},"google-logo":{"body":"<path fill=\"#4285F4\" d=\"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z\"/><path fill=\"#34A853\" d=\"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z\"/><path fill=\"#FBBC05\" d=\"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z\"/><path fill=\"#EA4335\" d=\"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z\"/><path fill=\"none\" d=\"M1 1h22v22H1z\"/>"},"icon":{"body":"<g fill=\"currentColor\"><path d=\"M1.25 7.629v7.15a2.5 2.5 0 0 0 2.5 2.5h12.5a2.5 2.5 0 0 0 2.5-2.5V7.63l-7.44 4.578a2.5 2.5 0 0 1-2.62 0L1.25 7.63Z\"/><path d=\"M18.75 6.161V6.03a2.5 2.5 0 0 0-2.5-2.5H3.75a2.5 2.5 0 0 0-2.5 2.5v.131l8.095 4.982a1.25 1.25 0 0 0 1.31 0L18.75 6.16Z\"/></g>","width":20,"height":21},"identification":{"body":"<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" d=\"M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z\"/>"},"key":{"body":"<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" d=\"M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z\"/>"},"light-bulb":{"body":"<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" d=\"M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18\"/>"},"long-arrow-right":{"body":"<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" d=\"M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3\"/>"},"microphone":{"body":"<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" d=\"M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z\"/>"},"mobile":{"body":"<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" d=\"M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3\"/>"},"moon":{"body":"<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" d=\"M21.752 15.002A9.72 9.72 0 0 1 18 15.75 9.75 9.75 0 0 1 8.25 6c0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25 9.75 9.75 0 0 0 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z\"/>"},"paint-brush":{"body":"<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" d=\"M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.764m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42\"/>"},"phone-arrow-up-right":{"body":"<path fill=\"none\" stroke=\"#0F172A\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" d=\"M20.25 3.75v4.5m0-4.5h-4.5m4.5 0-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z\"/>"},"plus":{"body":"<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" d=\"M12 4.5v15m7.5-7.5h-15\"/>"},"quotes":{"body":"<path fill=\"currentColor\" d=\"M2.792 3.833c-.13 0-.255.02-.38.038a2.09 2.09 0 0 1 .149-.396c.066-.18.17-.336.273-.493.087-.17.239-.284.351-.43.117-.14.277-.235.404-.352.124-.123.287-.184.416-.27.136-.078.253-.163.38-.204l.314-.13.276-.115-.283-1.13-.348.084c-.111.028-.247.06-.402.1-.158.029-.326.109-.514.182-.186.082-.4.138-.6.271-.2.128-.432.234-.636.404-.198.176-.437.328-.613.551a4.09 4.09 0 0 0-.53.678c-.171.238-.287.5-.41.758-.11.258-.2.523-.273.78a7.042 7.042 0 0 0-.224 1.42C.122 6 .134 6.348.16 6.6c.008.119.025.234.036.314l.015.098.015-.003a2.625 2.625 0 1 0 2.567-3.175Zm6.417 0c-.13 0-.255.02-.38.038a2.09 2.09 0 0 1 .149-.396c.066-.18.17-.336.273-.493.086-.17.239-.284.35-.43.118-.14.278-.235.404-.352.125-.123.287-.184.417-.27.135-.078.253-.163.379-.204l.315-.13.276-.115-.283-1.13-.348.084c-.112.028-.247.06-.402.1-.158.029-.327.109-.515.182-.185.083-.4.138-.6.272-.2.127-.432.233-.636.404-.197.175-.436.327-.612.55a4.09 4.09 0 0 0-.53.678c-.171.238-.287.5-.41.758-.11.258-.2.523-.273.78a7.042 7.042 0 0 0-.224 1.42c-.02.42-.008.768.016 1.02.01.119.025.234.037.314l.015.098.015-.003a2.625 2.625 0 1 0 2.567-3.175Z\"/>","width":17,"height":12},"rectangle-stack":{"body":"<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" d=\"M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 0 0 4.5 9v.878m13.5-3A2.25 2.25 0 0 1 19.5 9v.878m0 0a2.246 2.246 0 0 0-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0 1 21 12v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6c0-.98.626-1.813 1.5-2.122\"/>"},"rocket":{"body":"<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" d=\"M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7a15.53 15.53 0 0 1-.311.06 15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z\"/>"},"scale":{"body":"<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" d=\"M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z\"/>"},"shield-check":{"body":"<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" d=\"M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z\"/>"},"shopping-cart":{"body":"<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" d=\"M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z\"/>"},"squares-plus":{"body":"<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" d=\"M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z\"/>"},"sun":{"body":"<path fill=\"none\" stroke=\"text-slate\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" d=\"M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z\" class=\"stroke-red-500\"/>"},"trophy":{"body":"<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" d=\"M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721A48.339 48.339 0 0 1 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0\"/>"},"twitter-icon":{"body":"<path fill=\"currentColor\" d=\"M34.723 4.698c2.195.434 4.1 1.528 5.234 2.763l4.917-.233c1.288-.061 2.084 1.385 1.342 2.44l-3.412 4.854c.974 21.16-20.55 34.574-38.254 26.699-.8-.356-.968-1.177-.803-1.818.163-.634.687-1.273 1.49-1.37 2.51-.305 5.649-1.138 8.294-3.223-2.196-.33-4.657-1.59-6.76-3.258-2.52-1.998-4.655-4.687-5.238-7.32a1.315 1.315 0 0 1 .415-1.284 1.51 1.51 0 0 1 1.278-.346c1.274.235 3.218.569 4.708.72a24.699 24.699 0 0 1-2.987-3.87c-1.807-2.915-3.36-6.95-2.077-11.21.175-.583.652-.92 1.159-1.002.498-.08 1.048.08 1.438.489 2.341 2.457 8.323 7.677 17.447 8.435-.332-2.136-.546-6.707 4.337-9.988 2.473-1.662 5.152-1.936 7.472-1.478Z\"/>","width":48,"height":48},"user":{"body":"<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" d=\"M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z\"/>"},"user-group":{"body":"<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" d=\"M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z\"/>"},"whatsapp":{"body":"<path fill=\"currentColor\" d=\"M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.478-8.413\"/>"},"x-mark":{"body":"<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" d=\"M6 18 18 6M6 6l12 12\"/>"}},"width":24,"height":24}};

const cache = /* @__PURE__ */ new WeakMap();

const $$Astro$f = createAstro("https://astro-theme-one.vercel.app/");
const $$Icon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$Icon;
  class AstroIconError extends Error {
    constructor(message) {
      super(message);
    }
  }
  const req = Astro2.request;
  const { name = "", title, "is:inline": inline = false, ...props } = Astro2.props;
  const map = cache.get(req) ?? /* @__PURE__ */ new Map();
  const i = map.get(name) ?? 0;
  map.set(name, i + 1);
  cache.set(req, map);
  const includeSymbol = !inline && i === 0;
  let [setName, iconName] = name.split(":");
  if (!setName && iconName) {
    const err = new AstroIconError(`Invalid "name" provided!`);
    throw err;
  }
  if (!iconName) {
    iconName = setName;
    setName = "local";
    if (!icons[setName]) {
      const err = new AstroIconError('Unable to load the "local" icon set!');
      throw err;
    }
    if (!(iconName in icons[setName].icons)) {
      const err = new AstroIconError(`Unable to locate "${name}" icon!`);
      throw err;
    }
  }
  const collection = icons[setName];
  if (!collection) {
    const err = new AstroIconError(`Unable to locate the "${setName}" icon set!`);
    throw err;
  }
  const iconData = getIconData(collection, iconName ?? setName);
  if (!iconData) {
    const err = new AstroIconError(`Unable to locate "${name}" icon!`);
    throw err;
  }
  const id = `ai:${collection.prefix}:${iconName ?? setName}`;
  if (props.size) {
    props.width = props.size;
    props.height = props.size;
    delete props.size;
  }
  const renderData = iconToSVG(iconData);
  const normalizedProps = { ...renderData.attributes, ...props };
  const normalizedBody = renderData.body;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(normalizedProps)}${addAttribute(name, "data-icon")}> ${title && renderTemplate`<title>${title}</title>`} ${inline ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "id": id }, { "default": ($$result2) => renderTemplate`${unescapeHTML(normalizedBody)}` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${includeSymbol && renderTemplate`<symbol${addAttribute(id, "id")}>${unescapeHTML(normalizedBody)}</symbol>`}<use${addAttribute(`#${id}`, "xlink:href")}></use> ` })}`} </svg>`;
}, "/Users/danielgarcia/Downloads/katuq_landing/node_modules/astro-icon/components/Icon.astro", void 0);

const $$Astro$e = createAstro("https://astro-theme-one.vercel.app/");
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$Button;
  const {
    type = "button",
    size = "base",
    link,
    modal,
    style = "primary",
    variation,
    elevated,
    classes
  } = Astro2.props;
  return renderTemplate`${type === "link" || link ? renderTemplate`${maybeRenderHead()}<a${addAttribute(link, "href")}${addAttribute([
    "button",
    { [`button--${size}`]: size },
    { [`button--${style}`]: style },
    { [`button--${variation}`]: variation },
    { ["button--elevated"]: elevated },
    { [`${classes}`]: classes }
  ], "class:list")} data-astro-cid-6ygtcg62>${renderSlot($$result, $$slots["default"])}</a>` : renderTemplate`<button${addAttribute(type, "type")}${addAttribute([
    "button",
    { [`button--${size}`]: size },
    { [`button--${style}`]: style },
    { [`button--${variation}`]: variation },
    { ["button--elevated"]: elevated },
    { [`${classes}`]: classes }
  ], "class:list")}${spreadAttributes(modal ? { "data-modal": modal } : {})} data-astro-cid-6ygtcg62>${renderSlot($$result, $$slots["default"])}</button>`}`;
}, "/Users/danielgarcia/Downloads/katuq_landing/src/components/ui/Button.astro", void 0);

const navigationBarData = {
  logo: {
    src: "/logo.svg",
    alt: "The tailwind astro theme",
    text: "Katuq"
  },
  logoLarge: {
    src: "/logocompleto.png",
    alt: "Katuq logo completo",
    text: ""
  },
  navItems: [
    { name: "Inicio", link: "/" },
    { name: "Precios", link: "/pricing" },
    // { name: 'Features', link: '/features' },
    // {
    // 	name: 'Resources',
    // 	link: '#',
    // 	submenu: [
    // 		{ name: 'Blog', link: '/blog' },
    // 		{ name: 'Changelog', link: '/changelog' },
    // 		{ name: 'FAQ', link: '/faq' },
    // 		{ name: 'Terms', link: '/terms' }
    // 	]
    // },
    { name: "Contactenos", link: "/contact" }
  ],
  navActions: [
    { name: "Registrate", link: "/", style: "primary", size: "lg" },
    { name: "Login", link: "/", style: "primary", size: "lg" }
  ]
};

const $$Astro$d = createAstro("https://astro-theme-one.vercel.app/");
const $$NavigationBar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$NavigationBar;
  const { navItems, navActions, logoLarge } = navigationBarData;
  const path = new URL(Astro2.request.url).pathname;
  function isActivePath(currentPath) {
    return path === currentPath || path === `${currentPath}/`;
  }
  const savedNavActions = navActions.map((action) => ({
    ...action,
    size: action.size,
    style: action.style
  }));
  return renderTemplate`${maybeRenderHead()}<header class="header" data-astro-cid-a2ntzko5> <div class="header__container" data-astro-cid-a2ntzko5> <nav aria-label="main navigation" role="navigation" class="header__nav" data-astro-cid-a2ntzko5> <!-- Logo --> <a class="header__logo" href="/" data-astro-cid-a2ntzko5> <img${addAttribute(logoLarge.src, "src")}${addAttribute(logoLarge.alt, "alt")} width="100" height="100" data-astro-cid-a2ntzko5> <span data-astro-cid-a2ntzko5>${logoLarge.text}</span> </a> <!-- Menu toggle --> <button id="header-toggle" class="header__toggle" aria-expanded="false" aria-label="Toggle navigation" data-astro-cid-a2ntzko5> <div class="header__toggle-inner" data-astro-cid-a2ntzko5> <span aria-hidden="true" data-astro-cid-a2ntzko5></span> <span aria-hidden="true" data-astro-cid-a2ntzko5></span> <span aria-hidden="true" data-astro-cid-a2ntzko5></span> </div> </button> <!-- Navigation links --> <ul role="menubar" aria-label="Select page" class="header__menu" data-astro-cid-a2ntzko5> ${navItems.map((item) => renderTemplate`<li role="none" class="header__menu-item" data-astro-cid-a2ntzko5> ${!item.submenu ? renderTemplate`<a${addAttribute(item.link, "href")} role="menuitem"${addAttribute(`header__menu-link ${isActivePath(item.link) ? "active" : ""}`, "class")} data-astro-cid-a2ntzko5> ${item.name} </a>` : renderTemplate`<span role="menuitem"${addAttribute(`header__menu-link ${isActivePath(item.link) ? "active" : ""}`, "class")} data-astro-cid-a2ntzko5> ${item.name} ${renderComponent($$result, "Icon", $$Icon, { "name": "chevron-down", "class": "header__menu-chevron", "data-astro-cid-a2ntzko5": true })} </span>`} ${item.submenu && renderTemplate`<ul class="header__submenu" data-astro-cid-a2ntzko5> ${item.submenu.map((subItem) => renderTemplate`<li role="none" class="header__submenu-item" data-astro-cid-a2ntzko5> <a${addAttribute(subItem.link, "href")} role="menuitem"${addAttribute(`header__menu-link ${isActivePath(item.link) ? "active" : ""}`, "class")} data-astro-cid-a2ntzko5> ${subItem.name} </a> </li>`)} </ul>`} </li>`)} </ul> <!-- Theme Switcher --> <!-- <Switcher /> --> <!-- Navigation action buttons --> <div class="header__actions" data-astro-cid-a2ntzko5> ${savedNavActions.map(
    (action) => action.name === "Registrate" ? "" : action.name === "Login" ? renderTemplate`<a href="https://sellercenter.katuq.com/login" data-astro-cid-a2ntzko5> ${renderComponent($$result, "Button", $$Button, { "classes": "flex-auto", "size": action.size, "style": action.style, "data-astro-cid-a2ntzko5": true }, { "default": ($$result2) => renderTemplate`${action.name}` })} </a>` : action.name === "Contact" ? renderTemplate`<a href="https://sellercenter.katuq.com/contact" data-astro-cid-a2ntzko5> ${renderComponent($$result, "Button", $$Button, { "classes": "flex-auto", "size": action.size, "style": action.style, "data-astro-cid-a2ntzko5": true }, { "default": ($$result2) => renderTemplate`${action.name}` })} </a>` : renderTemplate`${renderComponent($$result, "Button", $$Button, { "classes": "flex-auto", "size": action.size, "style": action.style, "modal": "signup", "data-astro-cid-a2ntzko5": true }, { "default": ($$result2) => renderTemplate`${action.name}` })}`
  )} </div> </nav> </div> </header> `;
}, "/Users/danielgarcia/Downloads/katuq_landing/src/components/ui/NavigationBar.astro", void 0);

const $$Main = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<main> ${renderSlot($$result, $$slots["default"])} </main>`;
}, "/Users/danielgarcia/Downloads/katuq_landing/src/components/ui/Main.astro", void 0);

const socialLinks = [
  {
    name: "facebook",
    link: "/",
    icon: "fb-icon"
  },
  {
    name: "twitter",
    link: "/",
    icon: "twitter-icon"
  },
  {
    name: "discord",
    link: "/",
    icon: "discord-icon"
  },
  {
    name: "WhatsApp",
    link: "http://wa.me/573104082376",
    icon: "whatsapp"
  }
];

const footerNavigationData = {
  footerAbout: {
    title: "Katuq",
    // aboutText:'',
    logo: {
      src: "/logocompleto.png",
      alt: "The tailwind astro theme",
      text: ""
    }
  },
  footerColumns: [
    {
      category: "Productos",
      subCategories: [
        // {
        // 	subCategory: 'Features',
        // 	subCategoryLink: '/features'
        // },
        // {
        // 	subCategory: 'FAQ',
        // 	subCategoryLink: '/faq'
        // },
        {
          subCategory: "Precios",
          subCategoryLink: "/pricing"
        }
        // {
        // 	subCategory: 'Changelog',
        // 	subCategoryLink: '/changelog'
        // },
        // {
        // 	subCategory: 'Terms',
        // 	subCategoryLink: '/terms'
        // }
      ]
    },
    {
      category: "Acerca de nosotros",
      subCategories: [
        {
          subCategory: "Nosotros",
          subCategoryLink: "/"
        }
        // {
        // 	subCategory: 'News',
        // 	subCategoryLink: '/blog'
        // },
        // {
        // 	subCategory: 'Careers',
        // 	subCategoryLink: '/blog'
        // }
      ]
    },
    {
      category: "Póngase en contacto",
      subCategories: [
        {
          subCategory: "Contactenos",
          subCategoryLink: "/contact"
        },
        {
          subCategory: "Soporte",
          subCategoryLink: "/contact"
        },
        {
          subCategory: "Únete a nosotros",
          subCategoryLink: "/SheduleConsultation"
        },
        {
          subCategory: "Whatsapp",
          subCategoryLink: "http://wa.me/573104082376"
        }
      ]
    }
  ],
  subFooter: {
    copywriteText: "© Katuq 2024."
  }
};

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const { footerAbout, footerColumns, subFooter } = footerNavigationData;
  return renderTemplate`${maybeRenderHead()}<footer class="footer" data-astro-cid-mh6itkc3> <!-- Main footer --> <div class="footer__main" data-astro-cid-mh6itkc3> <div class="footer__container" data-astro-cid-mh6itkc3> <div class="footer__cols" data-astro-cid-mh6itkc3> <div class="footer__col" data-astro-cid-mh6itkc3> <a aria-label="webiste logo" aria-current="page" class="footer__main-brand" href="/" data-astro-cid-mh6itkc3> <img${addAttribute(footerAbout.logo.src, "src")}${addAttribute(footerAbout.logo.alt, "alt")} width="100" height="32" data-astro-cid-mh6itkc3> ${footerAbout.logo.text} </a> <p data-astro-cid-mh6itkc3> ${footerAbout.aboutText} </p> </div> ${footerColumns.map((column) => renderTemplate`<div class="footer__col" data-astro-cid-mh6itkc3> <h3 data-astro-cid-mh6itkc3>${column.category}</h3> <ul data-astro-cid-mh6itkc3> ${column.subCategories.map((subCategory) => renderTemplate`<li data-astro-cid-mh6itkc3> <a${addAttribute(subCategory.subCategoryLink, "href")} data-astro-cid-mh6itkc3> ${subCategory.subCategory} </a> </li>`)} </ul> </div>`)} </div> </div> </div> <!-- Sub Footer --> <div class="footer__sub" data-astro-cid-mh6itkc3> <div class="footer__container" data-astro-cid-mh6itkc3> <div class="footer__sub-cols" data-astro-cid-mh6itkc3> <div class="footer__sub-col" data-astro-cid-mh6itkc3>${subFooter.copywriteText}</div> <nav aria-labelledby="footer-social-links-dark" class="footer__sub-col text-right" data-astro-cid-mh6itkc3> <h2 class="sr-only" id="footer-social-links-dark" data-astro-cid-mh6itkc3>Social Media Links</h2> <ul data-astro-cid-mh6itkc3> ${socialLinks.map((social) => renderTemplate`<li data-astro-cid-mh6itkc3> <a${addAttribute(social.link, "href")}${addAttribute(social.name, "aria-label")} data-astro-cid-mh6itkc3> ${renderComponent($$result, "Icon", $$Icon, { "name": social.icon, "data-astro-cid-mh6itkc3": true })} </a> </li>`)} </ul> </nav> </div> </div> </div> </footer> `;
}, "/Users/danielgarcia/Downloads/katuq_landing/src/components/ui/Footer.astro", void 0);

const $$Astro$c = createAstro("https://astro-theme-one.vercel.app/");
const $$Modal = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Modal;
  const { id, title, classes } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${spreadAttributes(id ? { id } : {})}${addAttribute(["modal", { [`${classes}`]: classes }], "class:list")} data-astro-cid-hrybwmjy> <div class="modal__popup" data-astro-cid-hrybwmjy> <div class="modal__header" data-astro-cid-hrybwmjy> ${title && renderTemplate`<h2 class="modal__title" data-astro-cid-hrybwmjy>${title}</h2>`} ${renderComponent($$result, "Button", $$Button, { "size": "sm", "style": "neutral", "classes": "modal__close", "variation": "link", "data-astro-cid-hrybwmjy": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Icon", $$Icon, { "name": "x-mark", "class": "dark:text-neutral-50", "data-astro-cid-hrybwmjy": true })} <span class="sr-only" data-astro-cid-hrybwmjy>Close</span> ` })} </div> <div class="modal__body" data-astro-cid-hrybwmjy> ${renderSlot($$result, $$slots["default"])} </div> </div> </div> `;
}, "/Users/danielgarcia/Downloads/katuq_landing/src/components/ui/Modal.astro", void 0);

const $$Astro$b = createAstro("https://astro-theme-one.vercel.app/");
const $$Form = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Form;
  const { method = "post", action, id, classes } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<form${addAttribute(method, "method")}${addAttribute(action, "action")}${addAttribute(id, "id")} novalidate${addAttribute([{ [`${classes}`]: classes }], "class:list")}> ${renderSlot($$result, $$slots["default"])} </form>`;
}, "/Users/danielgarcia/Downloads/katuq_landing/src/components/ui/forms/Form.astro", void 0);

const $$Astro$a = createAstro("https://astro-theme-one.vercel.app/");
const $$FormField = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$FormField;
  const { classes } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["form__field", { [`${classes}`]: classes }], "class:list")} data-astro-cid-dtkul75s> ${renderSlot($$result, $$slots["default"])} </div> `;
}, "/Users/danielgarcia/Downloads/katuq_landing/src/components/ui/forms/partials/FormField.astro", void 0);

const $$Astro$9 = createAstro("https://astro-theme-one.vercel.app/");
const $$InputField = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$InputField;
  const {
    type = "text",
    id,
    label,
    iconName,
    iconPosition,
    helperText,
    required,
    disabled,
    value,
    classes
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute([
    "input",
    { [`input--icon-${iconPosition}`]: iconPosition },
    ,
    { [`${classes}`]: classes }
  ], "class:list")} data-astro-cid-uahl2chr> <input${addAttribute(id, "id")}${addAttribute(type, "type")}${addAttribute(id, "name")}${addAttribute(label, "placeholder")}${addAttribute(required, "required")}${addAttribute(disabled, "disabled")}${addAttribute(value, "value")} class="input__field peer" data-astro-cid-uahl2chr> <label${addAttribute(id, "for")}${addAttribute(`input__label ${iconPosition === "lead" ? "peer-placeholder-shown:left-10 peer-focus:left-2" : ""}`, "class")} data-astro-cid-uahl2chr> ${label} </label> ${iconName && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": iconName, "class": "input__icon", "data-astro-cid-uahl2chr": true })}`} ${helperText && renderTemplate`<small class="input__helper-text" data-astro-cid-uahl2chr> <span data-astro-cid-uahl2chr> ${helperText} </span> </small>`} </div> `;
}, "/Users/danielgarcia/Downloads/katuq_landing/src/components/ui/forms/form-elements/InputField.astro", void 0);

const $$Astro$8 = createAstro("https://astro-theme-one.vercel.app/");
const $$SignUp = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$SignUp;
  const { classes } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Modal", $$Modal, { "id": "signup", "classes": classes, "title": "Sign up" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p class="mb-0">Enter your email bellow to get started with Katuq</p> ${renderComponent($$result2, "Form", $$Form, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "FormField", $$FormField, {}, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "InputField", $$InputField, { "type": "email", "id": "email", "label": "Your Email" })} ` })} ${renderComponent($$result3, "Button", $$Button, { "style": "primary", "type": "submit", "classes": "w-full", "size": "lg" }, { "default": ($$result4) => renderTemplate`Sign up` })} <div class="my-2 text-center">or</div> ${renderComponent($$result3, "Button", $$Button, { "style": "primary", "type": "submit", "classes": "w-full", "size": "lg", "classes": "!bg-white w-full !text-neutral-500 border border-neutral-100" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Icon", $$Icon, { "name": "google-logo", "class": "h-6 w-6" })}
Signup with Google
` })} ` })} ` })}`;
}, "/Users/danielgarcia/Downloads/katuq_landing/src/components/blocks/modal/SignUp.astro", void 0);

const $$Astro$7 = createAstro("https://astro-theme-one.vercel.app/");
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "/Users/danielgarcia/Downloads/katuq_landing/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/danielgarcia/Downloads/katuq_landing/node_modules/astro/components/ClientRouter.astro", void 0);

const googleSiteVerification = "";
const googleAnalyticsMeasurementID = "G-6JVV6NQT7N";
const googleTagManagerID = "";

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(cooked.slice()) }));
var _a$2;
const $$GoogleAnalytics = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$2 || (_a$2 = __template$2(['<script type="text/partytown"', '><\/script> <script type="text/partytown"', ` id="ga-init">
	const measurementId = document.getElementById('ga-init').getAttribute('data-ga-measurement-id')
	window.dataLayer = window.dataLayer || []
	function gtag() {
		dataLayer.push(arguments) // eslint-disable-line
	}
	gtag('js', new Date())
	gtag('config', measurementId)
<\/script>`])), addAttribute(`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsMeasurementID}`, "src"), addAttribute(googleAnalyticsMeasurementID, "data-ga-measurement-id"));
}, "/Users/danielgarcia/Downloads/katuq_landing/src/components/scripts/googleAnalytics.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$1 || (_a$1 = __template$1(['<!-- Google Tag Manager --><script type="text/partytown"', ` id="gtm-init">
	const tagtId = document.getElementById('gtm-init').getAttribute('data-gtm-measurement-id')
	;(function (w, d, s, l, i) {
		w[l] = w[l] || []
		w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' })
		var f = d.getElementsByTagName(s)[0],
			j = d.createElement(s),
			dl = l != 'dataLayer' ? '&l=' + l : ''
		j.async = true
		j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl
		f.parentNode.insertBefore(j, f)
	})(window, document, 'script', 'dataLayer', tagtId)
<\/script> <!-- End Google Tag Manager -->`])), addAttribute(googleTagManagerID, "data-gtm-measurement-id"));
}, "/Users/danielgarcia/Downloads/katuq_landing/src/components/scripts/googleTagManagerHead.astro", void 0);

const $$GoogleSearchConsole = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${googleSiteVerification}`;
}, "/Users/danielgarcia/Downloads/katuq_landing/src/components/scripts/googleSearchConsole.astro", void 0);

const $$Astro$6 = createAstro("https://astro-theme-one.vercel.app/");
const $$Seo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Seo;
  const { title, description, ogImage, canonical, noindex } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`<title>${title}</title><meta name="description"${addAttribute(description, "content")}><meta property="og:type" content="website"><meta property="og:url"${addAttribute(Astro2.url, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(ogImage, "content")}><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(Astro2.url, "content")}><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta property="twitter:image"${addAttribute(ogImage, "content")}><link rel="canonical"${addAttribute(Astro2.url, "href")}>${canonical && renderTemplate`<link rel="canonical"${addAttribute(Astro2.url, "href")} item-prop="url">`}${noindex && renderTemplate`<meta name="robots" content="noindex,nofollow">`}` })}`;
}, "/Users/danielgarcia/Downloads/katuq_landing/src/components/blocks/head/partials/Seo.astro", void 0);

const configData = {
  siteTitle: "Katuq",
  siteDescription: "Empower your business with advanced AI and automated solutions from sales to delivery.",
  ogImage: "/faviconkatuq.png",
  logo: {
    src: "/logo.svg",
    alt: "Katuq logo"
  },
  canonical: true,
  noindex: false,
  mode: "dark",
  scrollAnimations: true
};
const appointmentConfig = {
  demoBookingUrl: "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3Ha4_YfWOkb8PQUBRxuhcaFGxrgEDheIJQgZLlo7poujTrimqSLqEzT_jUCWVNA0i_yg4_FolX",
  buttonColor: "#9b00ff",
  buttonText: "Agendar Demo Gratuita"
};
const contactConfig = {
  phoneNumber: "573104082376",
  whatsappMessage: "¡Hola! Me interesa conocer más sobre Katuq 😊",
  position: "bottom-right",
  showWhatsApp: true,
  showPhone: true
};

const $$Astro$5 = createAstro("https://astro-theme-one.vercel.app/");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Header;
  const {
    title = configData.siteTitle,
    description = configData.siteDescription,
    ogImage = configData.ogImage,
    canonical = configData.canonical,
    noindex = configData.noindex
  } = Astro2.props;
  return renderTemplate`<head>${renderTemplate`${renderComponent($$result, "GoogleAnalytics", $$GoogleAnalytics, {})}`}${googleTagManagerID}${renderComponent($$result, "GoogleSearchConsole", $$GoogleSearchConsole, {})}<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1">${renderComponent($$result, "Seo", $$Seo, { "title": title, "description": description, "ogImage": ogImage, "canonical": canonical, "noindex": noindex })}<link rel="icon"${addAttribute(configData.logo.src, "href")} type="image/svg+xml"><link rel="sitemap" href="/sitemap-index.xml"><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta name="theme-color" content="#134e4a">${renderComponent($$result, "ClientRouter", $$ClientRouter, { "fallback": "swap" })}${renderHead()}</head>`;
}, "/Users/danielgarcia/Downloads/katuq_landing/src/components/blocks/head/Header.astro", void 0);

const $$Astro$4 = createAstro("https://astro-theme-one.vercel.app/");
const $$FloatingContactButtons = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$FloatingContactButtons;
  const {
    phoneNumber,
    whatsappMessage = "\xA1Hola! Me interesa conocer m\xE1s sobre Katuq \u{1F60A}",
    position = "bottom-right",
    classes
  } = Astro2.props;
  const encodedMessage = encodeURIComponent(whatsappMessage);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  const phoneUrl = `tel:${phoneNumber}`;
  const positionClasses = {
    "bottom-right": "bottom-6 right-6",
    "bottom-left": "bottom-6 left-6",
    "top-right": "top-6 right-6",
    "top-left": "top-6 left-6"
  };
  return renderTemplate`${maybeRenderHead()}<div id="floating-contact-buttons"${addAttribute([
    "fixed z-50 flex flex-col gap-3",
    positionClasses[position],
    { [`${classes}`]: classes }
  ], "class:list")} data-astro-cid-tnm4gtba> <!-- WhatsApp Button --> <div class="group relative" data-astro-cid-tnm4gtba> <a${addAttribute(whatsappUrl, "href")} target="_blank" rel="noopener noreferrer" class="flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 animate-pulse hover:animate-none" aria-label="Contáctanos por WhatsApp" id="whatsapp-link" data-astro-cid-tnm4gtba> <!-- WhatsApp SVG Icon --> <svg class="w-8 h-8" viewBox="0 0 24 24" fill="currentColor" data-astro-cid-tnm4gtba> <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488" data-astro-cid-tnm4gtba></path> </svg> </a> <!-- WhatsApp Tooltip --> <div class="absolute bottom-16 right-0 mb-2 hidden group-hover:block animate-fade-in" data-astro-cid-tnm4gtba> <div class="bg-neutral-800 text-white text-sm rounded-lg py-2 px-3 whitespace-nowrap shadow-lg" data-astro-cid-tnm4gtba> <span data-astro-cid-tnm4gtba>¡Chatea con nosotros!</span> <div class="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-neutral-800" data-astro-cid-tnm4gtba></div> </div> </div> </div> <!-- Phone Button --> <div class="group relative" data-astro-cid-tnm4gtba> <a${addAttribute(phoneUrl, "href")} class="flex items-center justify-center w-12 h-12 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 breathing-animation" aria-label="Llamar a Katuq" id="phone-link" data-astro-cid-tnm4gtba> <!-- Phone SVG Icon --> <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" data-astro-cid-tnm4gtba> <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" data-astro-cid-tnm4gtba></path> </svg> </a> <!-- Phone Tooltip --> <div class="absolute bottom-14 right-0 mb-2 hidden group-hover:block animate-fade-in" data-astro-cid-tnm4gtba> <div class="bg-neutral-800 text-white text-sm rounded-lg py-2 px-3 whitespace-nowrap shadow-lg" data-astro-cid-tnm4gtba> <span data-astro-cid-tnm4gtba>¡Llámanos directamente!</span> <div class="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-neutral-800" data-astro-cid-tnm4gtba></div> </div> </div> </div> </div>  ${renderScript($$result, "/Users/danielgarcia/Downloads/katuq_landing/src/components/ui/FloatingContactButtons.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/danielgarcia/Downloads/katuq_landing/src/components/ui/FloatingContactButtons.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$LocalScripts = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["<!-- Scripts for UI components --><script async defer>\n	document.addEventListener('astro:page-load', () => {\n		// Menu Dropdown\n		const menuItems = document.querySelectorAll('.header__menu-item')\n		menuItems.forEach((menuItem) => {\n			const submenu = menuItem.querySelector('.header__submenu')\n			const link = menuItem.querySelector('.header__menu-link')\n\n			if (submenu && link) {\n				link.addEventListener('click', function (event) {\n					event.preventDefault()\n					menuItem.classList.toggle('open')\n				})\n			}\n		})\n		document.addEventListener('click', function (event) {\n			const target = event.target\n\n			menuItems.forEach((menuItem) => {\n				const submenu = menuItem.querySelector('.header__submenu')\n				if (submenu && !menuItem.contains(target)) {\n					menuItem.classList.remove('open')\n				}\n			})\n		})\n\n		// Menu toggle\n		const headerToggle = document.querySelector('.header__toggle')\n		const headerMenu = document.querySelector('.header__menu')\n		if (headerToggle && headerMenu) {\n			headerToggle.addEventListener('click', () => {\n				headerToggle.classList.toggle('header__toggle--open')\n				const isExpanded = headerToggle.getAttribute('aria-expanded') === 'true'\n				const newExpandedValue = isExpanded ? 'false' : 'true'\n				headerToggle.setAttribute('aria-expanded', newExpandedValue)\n				headerMenu.classList.toggle('header__menu--open')\n			})\n		}\n\n		// Modals\n		function openModal(modal) {\n			if (modal && modal.classList.contains('modal')) {\n				modal.classList.add('open')\n			}\n		}\n		function closeModal(modal) {\n			if (modal && modal.classList.contains('modal')) {\n				modal.classList.remove('open')\n			}\n		}\n		const modalButtons = document.querySelectorAll('[data-modal]')\n\n		modalButtons.forEach(function (button) {\n			button.addEventListener('click', function () {\n				const modalId = button.getAttribute('data-modal')\n				const modal = document.getElementById(modalId)\n				openModal(modal)\n			})\n		})\n		document.querySelectorAll('.modal').forEach(function (modal) {\n			modal.addEventListener('click', function (event) {\n				if (event.target === modal) {\n					closeModal(modal)\n				}\n			})\n			const close = modal.querySelector('.modal__close')\n			close.addEventListener('click', function (event) {\n				event.stopPropagation()\n				closeModal(modal)\n			})\n		})\n	})\n<\/script> <!-- Scroll animations -->", " <!-- Light/Dark mode  -->", ""])), renderScript($$result, "/Users/danielgarcia/Downloads/katuq_landing/src/components/scripts/LocalScripts.astro?astro&type=script&index=0&lang.ts"), renderScript($$result, "/Users/danielgarcia/Downloads/katuq_landing/src/components/scripts/LocalScripts.astro?astro&type=script&index=1&lang.ts"));
}, "/Users/danielgarcia/Downloads/katuq_landing/src/components/scripts/LocalScripts.astro", void 0);

const $$GoogleTagManagerBody = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${googleTagManagerID}`;
}, "/Users/danielgarcia/Downloads/katuq_landing/src/components/scripts/googleTagManagerBody.astro", void 0);

const $$Astro$3 = createAstro("https://astro-theme-one.vercel.app/");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description, ogImage, noindex } = Astro2.props;
  return renderTemplate`<html lang="en" class="scroll-animation  dark mode-dark"> ${renderComponent($$result, "Header", $$Header, { "title": title, "description": description, "ogImage": ogImage, "noindex": noindex })}<!-- El script de Google API se cargará dinámicamente en ScheduleConsultation.astro --> ${maybeRenderHead()}<body${addAttribute([
    "scroll-animation",
    { "mode-dark": configData.mode },
    { ["scroll-animation"]: configData.scrollAnimations }
  ], "class:list")}> ${renderComponent($$result, "GoogleTagManagerBody", $$GoogleTagManagerBody, {})} ${renderComponent($$result, "NavigationBar", $$NavigationBar, {})} ${renderComponent($$result, "Main", $$Main, {}, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })} ${renderComponent($$result, "Footer", $$Footer, {})} ${renderComponent($$result, "Modal", $$SignUp, {})} ${renderComponent($$result, "FloatingContactButtons", $$FloatingContactButtons, { "phoneNumber": contactConfig.phoneNumber, "whatsappMessage": contactConfig.whatsappMessage, "position": contactConfig.position })} ${renderComponent($$result, "Scriprs", $$LocalScripts, {})} </body></html>`;
}, "/Users/danielgarcia/Downloads/katuq_landing/src/layouts/Layout.astro", void 0);

const $$Astro$2 = createAstro("https://astro-theme-one.vercel.app/");
const $$Section = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Section;
  const {
    id,
    fullWidth,
    stickyCol = false,
    mode,
    padding = "both",
    bg,
    bgPosition = "center",
    bgHeight = "100%",
    classes
  } = Astro2.props;
  const bgStyle = bg ? {
    mode: "dark",
    backgroundImage: `url(${bg})`,
    height: bgHeight,
    backgroundPosition: bgPosition
  } : {
    height: bgHeight
  };
  return renderTemplate`${maybeRenderHead()}<section${spreadAttributes(id ? { id } : {})}${addAttribute([
    "section",
    { "section--sticky-col": stickyCol },
    { "section--fullwidth": fullWidth },
    { "section--padded": padding === "both" },
    { "section--padded-t": padding === "top" },
    { "section--padded-b": padding === "bottom" },
    { [`${mode}`]: mode },
    { [`${classes}`]: classes }
  ], "class:list")} data-astro-cid-5v3l7meg> <div class="section__bg"${addAttribute(bgStyle, "style")} data-astro-cid-5v3l7meg></div> <div class="container" data-astro-cid-5v3l7meg> ${renderSlot($$result, $$slots["default"])} </div> </section> `;
}, "/Users/danielgarcia/Downloads/katuq_landing/src/components/ui/Section.astro", void 0);

const $$Astro$1 = createAstro("https://astro-theme-one.vercel.app/");
const $$Row = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Row;
  const { flex, mode, classes } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["row", { "row--flex": flex }, { [`${classes}`]: classes }, { [`${mode}`]: mode }], "class:list")} data-astro-cid-eq54w2gt> ${renderSlot($$result, $$slots["default"])} </div> `;
}, "/Users/danielgarcia/Downloads/katuq_landing/src/components/ui/Row.astro", void 0);

const $$Astro = createAstro("https://astro-theme-one.vercel.app/");
const $$Col = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Col;
  const { span, spanMobile = "12", align, classes } = Astro2.props;
  const hasContent = Astro2.slots.default;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute([
    "col",
    { [`col-span-${spanMobile}`]: spanMobile },
    { [`lg:col-span-${span}`]: span },
    { [`text-${align}`]: align },
    { [`${classes}`]: classes }
  ], "class:list")} data-astro-cid-poit3qco> ${hasContent ? renderTemplate`${renderSlot($$result, $$slots["default"])}` : renderTemplate`<div class="col__placeholder" data-astro-cid-poit3qco></div>`} </div> `;
}, "/Users/danielgarcia/Downloads/katuq_landing/src/components/ui/Col.astro", void 0);

export { $$Icon as $, $$Row as a, $$Col as b, $$Section as c, $$Layout as d, $$Button as e, $$Form as f, $$FormField as g, $$InputField as h, appointmentConfig as i };
