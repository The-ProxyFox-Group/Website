import { App } from "aleph/react";
import { serve } from "aleph/server";
import * as Server from "react-dom/server";

serve({
    routes: "./routes/**/*.{tsx,ts}",
    ssr: {
        // when set `dataDefer` to `true`, the router will loading data as defer
        // please check https://alephjs.org/docs/react/router/data-defer
        dataDefer: false,
        render: (ctx) => {
            
            return Server.renderToReadableStream(<App ssrContext={ctx} />, ctx)
        },
    },
});
