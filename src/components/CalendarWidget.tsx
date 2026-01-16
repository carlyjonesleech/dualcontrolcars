import { useEffect } from "react";

declare global {
  interface Window {
    Cal?: any;
  }
}

const CalendarWidget = () => {
  useEffect(() => {
    // Load Cal.com embed script
    (function (C: any, A: string, L: string) {
      let p = function (a: any, ar: any) { a.q.push(ar); };
      let d = C.document;
      C.Cal = C.Cal || function () {
        let cal = C.Cal;
        let ar = arguments;
        if (!cal.loaded) {
          cal.ns = {};
          cal.q = cal.q || [];
          d.head.appendChild(d.createElement("script")).src = A;
          cal.loaded = true;
        }
        if (ar[0] === L) {
          const api = function () { p(api, arguments); };
          const namespace = ar[1];
          api.q = api.q || [];
          if (typeof namespace === "string") {
            cal.ns[namespace] = cal.ns[namespace] || api;
            p(cal.ns[namespace], ar);
            p(cal, ["initNamespace", namespace]);
          } else p(cal, ar);
          return;
        }
        p(cal, ar);
      };
    })(window, "https://app.cal.eu/embed/embed.js", "init");

    window.Cal("init", "private", { origin: "https://app.cal.eu" });

    window.Cal.ns.private("inline", {
      elementOrSelector: "#my-cal-inline-private",
      config: { "layout": "month_view" },
      calLink: "chesterdualdrive/private",
    });

    window.Cal.ns.private("ui", { "hideEventTypeDetails": false, "layout": "month_view" });
  }, []);

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-4">Book Your Session</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Select a convenient time slot to book your dual control car hire
          </p>
        </div>
        <div 
          id="my-cal-inline-private" 
          className="w-full min-h-[600px] overflow-auto rounded-lg"
        />
      </div>
    </section>
  );
};

export default CalendarWidget;
