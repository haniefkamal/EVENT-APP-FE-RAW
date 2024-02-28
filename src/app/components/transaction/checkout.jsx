"use client";
import { Calendar, Clock, MapPin } from "react-feather";
import SectionFooter from "../home/footer";
import { Input } from "@material-tailwind/react";
import { ReferralButton } from "./referral";

function Checkout() {
  const eventData = [
    {
      id: 1,
      title: "Standup Specials by Angga Krisna",
      thumbnail: "https://ichef.bbci.co.uk/images/ic/1200x675/p0c26c46.jpg",
      date: "1 April 2024",
      time: "16.00 - 18.00",
      location: "Yogyakarta",
      price: 399000,
      logo: "https://cutteristic.id/wp-content/uploads/2015/04/Cutteristic-Clients-Kompas-TV.jpg",
      creator: "Kompas TV",
    },
    {
      id: 2,
      title: "Purwadhika Jakarta MSIG Campus Tour",
      thumbnail: "https://i.ytimg.com/vi/d6nHeYXjenI/maxresdefault.jpg",
      date: "24 May 2024",
      time: "09.00 - 14.00",
      location: "Jakarta",
      price: 0,
      logo: "data:image/jpeg;base64,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l+JSk14Sm3y+VF80v493jJji8NnTam2G3y84eu2a13FjO63FateOzWhLZOm+7li968zNOYtSXbrbFqac4cbfOi2qpuVy1U11KuxrcppbfOl3mauf1Ofl6MnffHP3cxaME4ks8mp2act8XCWf7WZetpPm07aHPH7X80cHYjrSyhZai79WPvk0OtpzSNFnn9robp0YXhWknetSFCOzOMePLu6q79pjtnjybOLou8/HOzurJYbhwddzktWjHLjVJPOU92fLJ+SvQYJm15dOtMOmpv4fPzebYzxnXv6TpWTOlQT5Oeplzyy5F5P8WzjxcPfPi42s105v017q/wC3KIyucQEIUEJAhCghQQkGMZXSKAQiQQkCghCEBQQgREKCP2stpr2Oup2ScqclySi2mvOiTET4rW1qzvWdnZXVpMvmyRUbdGFqS53xJfujs9xhtgrPg38fSWSvdaN/Z0VDSpd0o/1FnqwfkuEl6W0eJ0882zHSmPbvrL+qmlO61H8KhWk9+ovfrMnZ7c1npTHyliXlpQvKvHK76VOhvk3Ufm5F6Uz3GCPNrZOlLz8Mbe7jrwvG2XnX17wqSqy6ZPPLclyJbkZorER3Odky3yTved3zIrEUEICEKCEgQhQQoISDGMrpFAIRIISBQQhCAoIQIiFBCEICghQQgIQoiFBCAhCghIEIUEKCEgxjK6RQCESCEgUEIQgKCECIhQQhCAoIUEICEKIhQQgIQoISBCFBCghIMYyukUAhEghIFBCEICghAiIUEIQgKCFBCAhCiIUEICEKCEgQhQQoISDGMrpFAIRIISBQQhCAoIQIiFBCEICghQQgIQoiFBCAhCghIEIUEKCEgxjK6RQCESCEgUEIQgKCECIhQQhCAoIUEICEKIhQQgIQoISBCFBCghIMYyukUAhEghIFBCEICghAiIUEIQgKCFBCAhCiIUEICEKCEgQhQQoISDGMrpFAIRIISBQQhCAoIQIiFBCEICghQQgIQoiFBCAhCghIEIUEKCEgxjK6RQCESCEgUEIQgKCECIhQQhCAoIUEICEKIhQQgIQoISBCFBCghIMYyukUAhEghIFBCEICghAiIUEIQgKCFBCAhCiIUEICEKCEgQhQQoISD//Z",
      creator: "Purwadhika Digital School",
    },
    {
      id: 3,
      title: "Ed Sheeran Live in Jakarta",
      thumbnail:
        "https://assets.loket.com/imgdir/2024-02-16/be/be68aabb035fe2ffb11bbe1af64e6e8eafe863d4157937700212540001.JPEG",
      date: "2 March 2024",
      time: "20.00 - 22.00",
      location: "Jakarta",
      price: 3000000,
      logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEUBAQEAAAD///8HBwdGRkaqqqro6Ohra2sgICB6enr39/fl5eXPz8/Y2Nj8/Pzr6+tAQEDHx8fy8vK4uLhTU1NMTEykpKQXFxeZmZlJSUlhYWF3d3dmZmZbW1sODg5WVlaDg4ONjY0oKCg5OTnLy8txEE+dAAADgklEQVR4nO3cfVeiUBTFYQ6QFSYqalqNVtT3/4zDvb6kAk2dVc3sPfv3V641iznP8gWEK0nCnWV/e4LvTkL8JMRPQvwkxE9C/CTET0L8JMRPQvwkxE9C/CTET0L8JMRPQvwkxE9C/CTET0L8JMRPQvwkxE9C/CTET0L8JMRPQvwkxE9C51b9ff0s3yG07Mrb8suJ3yNcpN4uQIT5/yC8fbj+fGMk4S/Px8wQSXj5+VEtG0joGUZC10Yl7JtFQtcwEro2KmHfLBK6hpHQtVEJ+2bBFp6eq+iCgAvNJoeuuk/IgAsTq8pdRTWerTuM8MLi+GxFOd20iBzCcgdM02p5TqQQlkWojNAhpTCobPM4i8QnUmHsNrxUR6TC7f86bh4Um9N/QyW0m/CmvKMX5qefNURCs2UVXqXG+RzGZrSfNNUqdDFKy7Lj0JVBeHTYlk4p9/g7Xdjf37SOvYmETYPn9pcLCmExjd2u298sSITDo6/5HbPwCPtm4RC+N4uErmEkdG20Uxh2ggNiodlivpjnlvUTwIX7U8LvzgIu/MAsErqGkdC1UQn7ZpHQNczP7Q//uOQZXTgdtaI6m2g2aC8InjMJE5vdnPc64RLSvw8/NIuErmEkdG1Uwr5ZJHQN88N7i85Hh1mQheE0zXy+2F4gTaxuHszXL0x7fLOwNqHaXeSuh+GgraI6pgm/aUrTcVyVaMtRAI5rqqvcb8Lmzwisaq6ra0fPYVyHkRYvZNcPD0Kz1wicsF0hfRPGZRjVXYeERHgRn8HHLgiHcBWB686z+wzC4XN8id53MxiE27Wzrz3XZxiEu54Yf41wJCzLckL7Pmxep1Vc4k38HD7kcU3bjG89zVZYXps9974VGYTxuDQelp6vD97OQiE024T1wXF1VGsWCmHz1318nc5Yn8Pw5yp+2jywnac5COM3xPAbtpezTxsmYb1/K57NgixMbNg8a/tFX3ZZNI/O94rowkme5/ujNYuP8sWGSth1RpjqVfqhWSR0DSOha6MS9s0ioWsYCV0blbBvFgldw0jo2qiEfbNACfnvX+q6B22FJHRVwgjvnEKcOyVntfN23jXI/bz578n+TyUhfhLiJyF+EuInIX4S4ichfhLiJyF+EuInIX4S4ichfhLiJyF+EuInIX4S4ichfhLiJyF+EuInIX4S4ichfhLiJyF+EuJHL7QkSzL2fgN3lzWJUVigWgAAAABJRU5ErkJggg==",
      creator: "PK Entertainment",
    },
    {
      id: 4,
      title: "Ghibli Orchestra: Legends & Replay by TRUST Orchestra",
      thumbnail:
        "https://hypeabis.id/assets/sponsored-content/Original_20240202174135000000_hypeabis-01-01.jpg",
      date: "9-10 March 2024",
      time: "16.00 - 18.00",
      location: "Bandung",
      price: 990000,
      logo: "https://media.licdn.com/dms/image/C510BAQFNke6B8NgeNg/company-logo_200_200/0/1630573000879/ciputra_artpreneur_logo?e=2147483647&v=beta&t=uWvItEqY-EUcM7kZl_Z_nx52kDFyxSz6h_IXPsykMx4",
      creator: "Ciputra Artpreneur",
    },
    {
      id: 5,
      title: "Outlook Obligasi Negara di 2024",
      thumbnail:
        "https://images.squarespace-cdn.com/content/v1/5bd82ac99b8fe8178d5bc6e9/53bdeac6-1e6d-4031-975f-987d052f1385/Jadwal+SBN+SBSN+Ritel+2024_Bibit.jpg",
      date: "1 June 2024",
      time: "16.00 - 17.00",
      location: "Online",
      price: 0,
      logo: "https://assets.bibit.id/logos/thumbnail-bibit.jpg",
      creator: "Bibit",
    },
  ];

  const selectedIndex = 3; // Change this index based.
  const selectedEvent = eventData[selectedIndex];

  const couponCode = "KUPONNEW";
  const couponValue = 30000;
  const subtotal = selectedEvent.price;

  return (
    <>
      <div className="transaction-wrapper">
        <div className="max-w-[1120px]">
          <div className="checkout-wrapper gap-10">
            {/* LEFT */}
            <div className="left max-w-full">
              <div className="mb-4 text-2xl font-bold">Order details</div>
              <div className="checkout-widget">
                <div className="checkout-widget-event flex-row">
                  <div className="checkout-widget-event-banner">
                    <img
                      className="w-full h-full absolute object-cover"
                      src={selectedEvent.thumbnail}
                      alt=""
                    />
                  </div>
                  <div className="checkout-widget-event-description w-[352px]">
                    <div className="">
                      <div className="truncate font-bold mb-2">
                        {selectedEvent.title}
                      </div>
                      <div className="flex gap-2 py-1">
                        <Calendar
                          color="black"
                          fill="#F2CD5C"
                          style={{ height: "24px" }}
                        />
                        <div className="truncate w-80">
                          {selectedEvent.date}
                        </div>
                      </div>
                      <div className="flex gap-2 py-1">
                        <Clock
                          color="black"
                          fill="#F2CD5C"
                          style={{ height: "24px" }}
                        />
                        <div className="truncate w-80">
                          {" "}
                          {selectedEvent.time}
                        </div>
                      </div>
                      <div className="flex gap-2 py-1">
                        <MapPin
                          color="black"
                          fill="#F2CD5C"
                          style={{ height: "24px" }}
                        />
                        <div className="truncate w-80">
                          {" "}
                          {selectedEvent.location}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* PRICE */}
                <div className="flex justify-between mt-5">
                  <div className="flex font-medium">Ticket Price</div>
                  <div className="flex items-end font-bold">
                    {new Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                      minimumFractionDigits: 0,
                    }).format(selectedEvent.price)}
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="right max-w-full">
              {/* Widget */}
              <div className="mt-11 gap-2 bg-[#F2CD5C] rounded-xl px-8 py-8 shadow-md">
                {/* Summary */}
                <div id="card-bill" className="font-bold text-xl">
                  Cart Summary
                </div>

                {/* Total */}
                <div className="flex my-5 justify-between ">
                  <div className="text-sm">Sub-total</div>
                  <div className="text-sm justify-end font-bold">
                    {new Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                      minimumFractionDigits: 0,
                    }).format(selectedEvent.price)}
                  </div>
                </div>

                <div className="flex my-5 justify-between ">
                  <div className="text-sm">Coupon</div>
                  <div className="text-sm justify-end font-bold">
                    [potongan coupon]
                  </div>
                </div>

                {/* Referal Section*/}
                <div className=" pt-5 border-t-[1px] border-black">
                  <ReferralButton />
                </div>

                <div className="flex my-5 justify-between pt-2 border-t-[1px] border-black font-bold text-xl">
                  <div className="">Total</div>
                  <div className="justify-end font-bold">[total transaksi]</div>
                </div>

                <div className="">
                  <button className="w-full bg-black  rounded-lg py-2">
                    <div className="text-[#F2CD5C] text-sm font-bold ">
                      CHECKOUT
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SectionFooter />
    </>
  );
}
export default Checkout;
