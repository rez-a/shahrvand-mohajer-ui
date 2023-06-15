import React, { useState } from 'react';
import Card from './Card';
import Spinner from 'components/shared/Spinner';
import useSWR from 'swr';
import { INCREAMENT_WALLET, WALLET } from 'services/endPoints';
import { fetcher } from 'services/swr/fetcher';
import TableLoaded from 'components/shared/TableLoaded';
import { DEPOSIT } from 'constants/wallet/walletType';
import { COMPLETED } from 'constants/wallet/walletStatus';
import EmptyDataProfile from './EmptyData';
import Toast from 'utilities/sweetAlert';
import redirectToGateway from 'helper/redirectToGateway';

const Wallet = () => {
  const [loading, setLoading] = useState(false);
  const [amount, setAmount] = useState('');

  const { data } = useSWR(WALLET, fetcher);

  const walletList = !!data && data.data;

  const icreamentWallet = async () => {
    setLoading(true);
    if (!!Number(amount)) {
      const response = await fetcher(
        `${INCREAMENT_WALLET}/${amount}`
      );
      redirectToGateway(response?.data.redirectToUrl);
    } else {
      Toast.fire({
        icon: 'info',
        text: 'مقدار فیلد را بررسی کنید',
      });
    }
    setLoading(false);
  };

  console.log(amount);

  return (
    <>
      <Card title="افزایش موجودی کیف پول">
        <div className="px-4 py-5">
          <form>
            <p className="mb-2 text-sm ">
              <small className="bg-neutral-200 px-2 py-1 rounded text-neutral-600">
                حداقل مبلغ شارژ کیف پول 1,000 تومان میباشد
              </small>
            </p>
            <div className="relative mb-3">
              <input
                className="w-full placeholder:text-xs px-3 py-2 h-10  rounded-md border outline-none focus:border-gray-400"
                type="text"
                id="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="مثلا 200,000"
              />
              <span class="bg-gray-100 absolute left-0 top-1/2 ml-1 -translate-y-1/2 text-gray-800 text-sm font-medium px-3 py-1.5 rounded">
                تومان
              </span>
            </div>

            <button
              onClick={icreamentWallet}
              type="button"
              className="bg-sky-500/90  text-white w-full sm:w-60 py-2 text-sm rounded-md font-bold shadow-lg shadow-sky-500/50 hover:bg-sky-500 transition-all duration-300"
            >
              <div className="flex items-center justify-center">
                {loading && <Spinner />}
                <span className="mr-2">افزایش موجودی</span>
              </div>
            </button>
          </form>
        </div>
      </Card>
      <Card title="تاریخچه کیف پول">
        <div>
          <div class="relative overflow-auto max-h-screen">
            {!walletList ? (
              <TableLoaded count={3} />
            ) : !!walletList.length ? (
              <div>
                <div class="relative overflow-auto max-h-screen">
                  <table class="w-full text-sm text-center text-gray-500 ">
                    <thead class="text-sm whitespace-nowrap text-gray-700  bg-gray-100">
                      <tr>
                        <th scope="col" class="px-6 py-3">
                          #
                        </th>
                        <th scope="col" class="px-6 py-3">
                          کیف پول
                        </th>
                        <th scope="col" class="px-6 py-3">
                          تاریخ
                        </th>
                        <th scope="col" class="px-6 py-3">
                          وضعیت تراکنش
                        </th>
                        <th scope="col" class="px-6 py-3">
                          مبلغ
                        </th>
                        <th scope="col" class="px-6 py-3">
                          نوع تراکنش
                        </th>
                      </tr>
                    </thead>
                    <tbody className="whitespace-nowrap">
                      {walletList.map((walletTransaction, index) => (
                        <tr
                          key={index}
                          class="bg-white border-b  hover:text-black hover:bg-gray-50/50 transition-all duration-200 "
                        >
                          <td class="px-6 py-4">{index + 1}</td>
                          <td class="px-6 py-4 text-black font-bold">
                            {Number(
                              walletTransaction.Balance
                            ).toLocaleString()}
                            <small
                              className="text-slate-700 font-light mr-1
                    "
                            >
                              تومان
                            </small>
                          </td>
                          <td class="px-6 py-4">
                            {walletTransaction.CreatedAt}
                          </td>
                          <td class="px-6 py-4">
                            <span
                              className={` font-bold border text-xs  p-2  rounded-md ${
                                walletTransaction.Status === COMPLETED
                                  ? 'bg-green-50 border-green-300 text-green-500 '
                                  : 'bg-rose-50 border-rose-300 text-rose-500'
                              }`}
                            >
                              {walletTransaction.Status === COMPLETED
                                ? 'موفق'
                                : 'ناموفق'}
                            </span>
                          </td>
                          <td class="px-6 py-4 text-black font-bold">
                            {Number(
                              walletTransaction.Amount
                            ).toLocaleString()}
                            <small
                              className="text-slate-700 font-light mr-1
                    "
                            >
                              تومان
                            </small>
                          </td>
                          <td class="px-6 py-4 ">
                            <span
                              className={` font-bold border text-xs  p-2  rounded-md ${
                                walletTransaction.Type === DEPOSIT
                                  ? 'bg-green-50 border-green-300 text-green-500 '
                                  : 'bg-rose-50 border-rose-300 text-rose-500'
                              }`}
                            >
                              {walletTransaction.Type === DEPOSIT ? (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  className="fill-current w-5 h-5 inline"
                                >
                                  <path d="M11 11V7H13V11H17V13H13V17H11V13H7V11H11ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z"></path>
                                </svg>
                              ) : (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  className="fill-current w-5 h-5 inline"
                                >
                                  <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM7 11H17V13H7V11Z"></path>
                                </svg>
                              )}
                              <span className="mr-2">
                                {walletTransaction.Summery}
                              </span>
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ) : (
              <EmptyDataProfile
                text="شما هیچ تراکنشی ندارید"
                textClassName="text-rose-500 font-bold"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-40 h-40"
                  viewBox="0 0 763.05693 458"
                >
                  <path
                    d="M266.47153,317a48,48,0,1,1,48-48A48.05437,48.05437,0,0,1,266.47153,317Zm0-94a46,46,0,1,0,46,46A46.05223,46.05223,0,0,0,266.47153,223Z"
                    transform="translate(-218.47153 -221)"
                    fill="#f2f2f2"
                  />
                  <path
                    d="M592.47153,289a24,24,0,1,1,24-24A24.02734,24.02734,0,0,1,592.47153,289Zm0-46a22,22,0,1,0,22,22A22.0249,22.0249,0,0,0,592.47153,243Z"
                    transform="translate(-218.47153 -221)"
                    fill="#f2f2f2"
                  />
                  <path
                    d="M761.47153,406a27,27,0,1,1,27-27A27.03062,27.03062,0,0,1,761.47153,406Zm0-52a25,25,0,1,0,25,25A25.02817,25.02817,0,0,0,761.47153,354Z"
                    transform="translate(-218.47153 -221)"
                    fill="#f2f2f2"
                  />
                  <path
                    d="M980.52847,679h-225a1,1,0,0,1,0-2h225a1,1,0,0,1,0,2Z"
                    transform="translate(-218.47153 -221)"
                    fill="#ccc"
                  />
                  <circle
                    cx="640.91705"
                    cy="128.68583"
                    r="24.56103"
                    fill="#ffb8b8"
                  />
                  <polygon
                    points="643.465 420.343 631.857 424.285 611.124 381.386 628.257 375.567 643.465 420.343"
                    fill="#ffb8b8"
                  />
                  <path
                    d="M843.0715,642.98141h23.64387a0,0,0,0,1,0,0v14.88687a0,0,0,0,1,0,0H828.18465a0,0,0,0,1,0,0v0A14.88686,14.88686,0,0,1,843.0715,642.98141Z"
                    transform="translate(-382.63173 86.1046) rotate(-18.76035)"
                    fill="#2f2e41"
                  />
                  <polygon
                    points="669.694 444.575 657.45 445.19 649.249 398.255 667.321 397.346 669.694 444.575"
                    fill="#ffb8b8"
                  />
                  <path
                    d="M867.3677,662.90195h23.64387a0,0,0,0,1,0,0v14.88687a0,0,0,0,1,0,0H852.48084a0,0,0,0,1,0,0v0A14.88686,14.88686,0,0,1,867.3677,662.90195Z"
                    transform="translate(-251.0201 -176.39845) rotate(-2.87712)"
                    fill="#2f2e41"
                  />
                  <path
                    d="M815.30049,509.63a10.05579,10.05579,0,0,0-.46773-15.41224l11.674-33.77419-17.99152,4.59774L800.18772,496.409a10.11027,10.11027,0,0,0,15.11277,13.221Z"
                    transform="translate(-218.47153 -221)"
                    fill="#ffb8b8"
                  />
                  <path
                    d="M887.02144,651.42383a4.54354,4.54354,0,0,1-.47412-.02539l-16.6206-1.75977a4.47242,4.47242,0,0,1-3.99805-3.97363L853.08394,531.15527l-9.29443,31.335,17.32861,61.583a4.50019,4.50019,0,0,1-3.81787,5.68946l-16.84766,1.93652a4.523,4.523,0,0,1-4.86328-3.31543l-18.40869-69.30274a4.48241,4.48241,0,0,1-.11133-1.748l8.27393-62.19873,61.71387,4.94873,4.4624,146.70312a4.50044,4.50044,0,0,1-4.49805,4.6377Z"
                    transform="translate(-218.47153 -221)"
                    fill="#2f2e41"
                  />
                  <path
                    d="M865.68843,510.71875c-20.67578,0-44.08447-7.98877-45.502-8.47949l-.41015-.14209L843.101,382.41309l.4292.01757c9.24365.375,34.46924.56739,34.72315.56934l.45263.00342,9.72266,105.61865,1.73779,15.44873-.21289.17236C884.00582,509.05176,875.13228,510.71875,865.68843,510.71875Z"
                    transform="translate(-218.47153 -221)"
                    fill="#f43f5e"
                  />
                  <path
                    d="M828.3359,500.37549,813.74654,494.499l7.436-89.94384a14.85637,14.85637,0,0,1,6.47412-11.10352l7.67724-5.22461v0a4.86843,4.86843,0,0,1,4.82712-6.23967l2.19876.07074a2.49979,2.49979,0,0,1,3.82715,2.66064l-.48291,9.5293Z"
                    transform="translate(-218.47153 -221)"
                    fill="#2f2e41"
                  />
                  <path
                    d="M820.97408,484.251l-19.04858-.80225,6.17065-39.69238,5.11328-37.34864a8.92423,8.92423,0,0,1,11.57764-7.8457h0a8.917,8.917,0,0,1,6.17431,9.647l-5.17968,40.46729Z"
                    transform="translate(-218.47153 -221)"
                    fill="#2f2e41"
                  />
                  <path
                    d="M851.13619,501.751l-.1294-.40088c-.08837-.27442-8.67285-27.81153,5.69141-60.67188l7.20313-35.82568,6.15562-22.49493a2.68922,2.68922,0,0,1,1.63131-1.77293,2.47718,2.47718,0,0,1,2.64861.68046l0,0a17.19838,17.19838,0,0,1,12.85951,1.28589l8.64469,4.55386a9.81489,9.81489,0,0,1,4.98163,10.923l-11.81543,50.42285,5.74365,47.09717Z"
                    transform="translate(-218.47153 -221)"
                    fill="#2f2e41"
                  />
                  <path
                    d="M863.71637,482.33769a10.05578,10.05578,0,0,0,11.11782-10.6841l26.7561-19.82058-9.35261-4.4342-28.85136,14.862a10.11028,10.11028,0,0,0,.33005,20.07692Z"
                    transform="translate(-218.47153 -221)"
                    fill="#ffb8b8"
                  />
                  <path
                    d="M880.49068,473.46533l-9.03662-16.86914,22.28711-14.668-10.876-39.00976A11.79539,11.79539,0,0,1,891.895,388.187h0a11.8273,11.8273,0,0,1,13.5,7.76416l14.6748,43.13526a4.49921,4.49921,0,0,1-1.51172,5.01269Z"
                    transform="translate(-218.47153 -221)"
                    fill="#2f2e41"
                  />
                  <path
                    d="M861.12673,354.89533c-2.94426.38308-5.1652-2.62934-6.19529-5.414s-1.81495-6.02657-4.37478-7.53078c-3.49727-2.05506-7.97186.41663-11.97116-.2614-4.51644-.7657-7.453-5.55225-7.68312-10.12736s1.59053-8.9754,3.377-13.19361l.62366,5.24227a10.39577,10.39577,0,0,1,4.54288-9.08678l-.80385,7.69223a8.16418,8.16418,0,0,1,9.39248-6.75554l-.1266,4.58332c5.2165-.6203,10.47858-1.24146,15.71053-.76889s10.50043,2.12792,14.4658,5.57356c5.93158,5.15414,8.09792,13.641,7.37063,21.46535s-3.95715,15.17468-7.32339,22.27519c-.847,1.78651-2.01841,3.80245-3.98237,4.03-1.76463.20448-3.3793-1.27064-3.92787-2.96026a10.7299,10.7299,0,0,1,.04764-5.271c.49629-2.63729,1.12192-5.33294.6553-7.97564s-2.36777-5.25419-5.03173-5.57806-5.38987,2.72118-4.10908,5.0794Z"
                    transform="translate(-218.47153 -221)"
                    fill="#2f2e41"
                  />
                  <path
                    d="M539.78148,624.57717l-9.56074-4.02569-6.55863-47.92811H436.32217l-7.10907,47.7323-8.55359,4.27673a2.0312,2.0312,0,0,0,.90847,3.84791H538.99351A2.03109,2.03109,0,0,0,539.78148,624.57717Z"
                    transform="translate(-218.47153 -221)"
                    fill="#e6e6e6"
                  />
                  <path
                    d="M694.99055,579h-429.038a8.50008,8.50008,0,0,1-8.481-8.5V510h446v60.5A8.50016,8.50016,0,0,1,694.99055,579Z"
                    transform="translate(-218.47153 -221)"
                    fill="#ccc"
                  />
                  <path
                    d="M703.92,538.59375H257.07993V279.72705a10.25845,10.25845,0,0,1,10.247-10.24658H693.673A10.25855,10.25855,0,0,1,703.92,279.72705Z"
                    transform="translate(-218.47153 -221)"
                    fill="#3f3d56"
                  />
                  <path
                    d="M677.232,519.80518H283.76792a7.90831,7.90831,0,0,1-7.89966-7.89942V296.16846a7.90873,7.90873,0,0,1,7.89966-7.89991H677.232a7.90873,7.90873,0,0,1,7.89966,7.89991v215.7373A7.90831,7.90831,0,0,1,677.232,519.80518Z"
                    transform="translate(-218.47153 -221)"
                    fill="#fff"
                  />
                  <path
                    d="M673.52847,628.98031h-381a1,1,0,0,1,0-2h381a1,1,0,0,1,0,2Z"
                    transform="translate(-218.47153 -221)"
                    fill="#ccc"
                  />
                  <path
                    d="M640.26763,493H320.73223a1,1,0,0,1-1-1V338.84668a1,1,0,0,1,2,0V491h318.5354a1,1,0,0,1,0,2Z"
                    transform="translate(-218.47153 -221)"
                    fill="#3f3d56"
                  />
                  <path
                    d="M389.003,482H359.94a2.97182,2.97182,0,0,1-2.96851-2.96826V438.96826A2.97182,2.97182,0,0,1,359.94,436h29.063a2.97181,2.97181,0,0,1,2.9685,2.96826v40.06348A2.97181,2.97181,0,0,1,389.003,482Z"
                    transform="translate(-218.47153 -221)"
                    fill="#f43f5e"
                  />
                  <path
                    d="M442.003,482H412.94a2.97182,2.97182,0,0,1-2.96851-2.96826V400.96826A2.97182,2.97182,0,0,1,412.94,398h29.063a2.97181,2.97181,0,0,1,2.9685,2.96826v78.06348A2.97181,2.97181,0,0,1,442.003,482Z"
                    transform="translate(-218.47153 -221)"
                    fill="#f43f5e"
                  />
                  <path
                    d="M495.003,482H465.94a2.97182,2.97182,0,0,1-2.96851-2.96826V438.96826A2.97182,2.97182,0,0,1,465.94,436h29.063a2.97181,2.97181,0,0,1,2.9685,2.96826v40.06348A2.97181,2.97181,0,0,1,495.003,482Z"
                    transform="translate(-218.47153 -221)"
                    fill="#f43f5e"
                  />
                  <path
                    d="M548.003,482H518.94a2.90686,2.90686,0,0,1-2.96851-2.83379V385.83379A2.90686,2.90686,0,0,1,518.94,383h29.063a2.90685,2.90685,0,0,1,2.9685,2.83379v93.33242A2.90685,2.90685,0,0,1,548.003,482Z"
                    transform="translate(-218.47153 -221)"
                    fill="#f43f5e"
                  />
                  <path
                    d="M601.003,482H571.94a2.97182,2.97182,0,0,1-2.96851-2.96826V358.96826A2.97182,2.97182,0,0,1,571.94,356h29.063a2.97181,2.97181,0,0,1,2.9685,2.96826V479.03174A2.97181,2.97181,0,0,1,601.003,482Z"
                    transform="translate(-218.47153 -221)"
                    fill="#f43f5e"
                  />
                  <circle cx="156" cy="197" r="6" fill="#3f3d56" />
                  <circle cx="209" cy="158" r="6" fill="#3f3d56" />
                  <circle cx="262" cy="197" r="6" fill="#3f3d56" />
                  <circle cx="315" cy="139" r="6" fill="#3f3d56" />
                  <circle cx="368" cy="117" r="6" fill="#3f3d56" />
                  <polygon
                    points="262.126 198.344 209 158.552 156.6 197.8 155.4 196.2 209 156.053 261.874 195.656 314.415 138.158 314.626 138.072 367.626 116.718 368.374 118.573 315.585 139.842 262.126 198.344"
                    fill="#3f3d56"
                  />
                </svg>
              </EmptyDataProfile>
            )}
          </div>
        </div>
      </Card>
    </>
  );
};

export default Wallet;
