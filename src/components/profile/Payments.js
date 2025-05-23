import React from 'react';
import Card from './Card';
import EmptyDataProfile from './EmptyData';
import useSWR from 'swr';
import { PAYMENTS, PROFILE } from 'services/endPoints';
import TableLoaded from 'components/shared/TableLoaded';
import { fetcher } from 'services/swr/fetcher';
import dispatcher from 'services/dispatcher';

const Payments = (props) => {
  const { data: payments } = useSWR(PAYMENTS, fetcher);
  return (
    <Card title="آخرین پرداخت ها">
      {!payments ? (
        <TableLoaded count={5} />
      ) : !!payments.data.length ? (
        <div>
          <div class="relative  overflow-auto max-h-screen">
            <table class="w-full text-sm text-right text-gray-500 ">
              <thead class="text-sm whitespace-nowrap text-gray-700  bg-gray-100">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    #
                  </th>
                  <th scope="col" className="px-6 py-3">
                    شماره پرداخت
                  </th>
                  <th scope="col" className="px-6 py-3">
                    تاریخ پرداخت
                  </th>
                  <th scope="col" className="px-6 py-3">
                    مبلغ پرداختی
                  </th>
                  <th scope="col" className="px-6 py-3">
                    وضعیت پرداخت
                  </th>
                  <th scope="col" className="px-6 py-3">
                    درگاه بانکی
                  </th>
                </tr>
              </thead>
              <tbody className="whitespace-nowrap">
                {payments.data.map((payment, index) => (
                  <tr
                    key={index}
                    className="bg-white border-b  hover:text-black hover:bg-gray-50/50 transition-all duration-200"
                  >
                    <td className="px-6 py-4">{index + 1}</td>
                    <th
                      scope="row"
                      className="px-6 py-4 font-bold text-gray-900 whitespace-nowrap "
                    >
                      {payment.Resnumber}
                    </th>
                    <td className="px-6 py-4">{payment.CreatedAt}</td>
                    <td className="px-6 py-4 text-black font-bold">
                      {payment.Amount}
                      <small
                        className="text-slate-700 font-light mr-1
                    "
                      >
                        تومان
                      </small>
                    </td>
                    <td className="px-6 py-4 ">
                      <span
                        className={`font-bold border text-xs  p-2  rounded-md ${
                          payment.Status === 'PAID'
                            ? 'bg-green-50 border-green-300 text-green-500'
                            : 'bg-rose-50 border-rose-300 text-rose-500'
                        }`}
                      >
                        {payment.Status === 'PAID'
                          ? 'موفق'
                          : 'ناموفق'}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-bold border text-xs  p-2  rounded-md bg-neutral-50 border-neutral-300 text-neutral-500">
                        {!!payment?.BankName
                          ? payment.BankName
                          : 'نامشخص'}
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
          text="شما هیچ پرداختی ندارید!!"
          textClassName="text-rose-500 font-bold"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            data-name="Layer 1"
            viewBox="0 0 567.1704 517.30967"
            className="w-40 h-40 mb-4"
          >
            <rect
              x="326.03543"
              y="307.38928"
              width="495"
              height="45"
              transform="translate(-385.45426 -17.88532) rotate(-16.24392)"
              fill="#3f3d56"
            />
            <path
              d="M386.40028,575.96948,316.35377,335.55639a7.0001,7.0001,0,0,1,4.76257-8.67871L784.8346,191.76928a7.00645,7.00645,0,0,1,8.67871,4.76221l62.05591,212.98877-1.92016.55957L791.59315,197.09106a5.00865,5.00865,0,0,0-6.19922-3.40186L321.67579,328.7976a5.00029,5.00029,0,0,0-3.40186,6.19922l70.04651,240.41309Z"
              transform="translate(-316.07106 -191.48811)"
              fill="#3f3d56"
            />
            <path
              d="M752.93324,410.51a6.51233,6.51233,0,0,1-6.24341-4.6831l-11.74854-40.32324a6.50734,6.50734,0,0,1,4.42212-8.0586l40.32349-11.74853a6.50722,6.50722,0,0,1,8.05859,4.42285L799.494,390.44262a6.50733,6.50733,0,0,1-4.42212,8.05859l-40.32349,11.74854A6.47854,6.47854,0,0,1,752.93324,410.51Z"
              transform="translate(-316.07106 -191.48811)"
              fill="#e11d48"
            />
            <path
              d="M385.31751,336.3a11.691,11.691,0,0,0-.43017-1.22,11.99972,11.99972,0,0,0-22.90967,6.67,11.37989,11.37989,0,0,0,.29,1.26,12.01924,12.01924,0,0,0,11.52978,8.64,11.74908,11.74908,0,0,0,3.3501-.48A12.01262,12.01262,0,0,0,385.31751,336.3Zm-8.73,12.95a10.01322,10.01322,0,0,1-12.3999-6.8,11.435,11.435,0,0,1-.28027-1.26,9.99681,9.99681,0,0,1,19.04-5.54,8.33837,8.33837,0,0,1,.45019,1.21A10.00446,10.00446,0,0,1,376.58753,349.25006Z"
              transform="translate(-316.07106 -191.48811)"
              fill="#e11d48"
            />
            <path
              d="M355.88508,344.87a11.00221,11.00221,0,0,1,4.20834-12.0571,11,11,0,1,0,5.81753,19.96694A11.00221,11.00221,0,0,1,355.88508,344.87Z"
              transform="translate(-316.07106 -191.48811)"
              fill="#e11d48"
            />
            <path
              d="M666.7472,394.43005a6.04249,6.04249,0,0,0-7.44971-4.2L592.90736,408.8l-7.14991,2h44.89991l7.1499-2,24.75-6.92A6.04864,6.04864,0,0,0,666.7472,394.43005Z"
              transform="translate(-316.07106 -191.48811)"
              fill="#ccc"
            />
            <path
              d="M619.77747,380.56005a6.04513,6.04513,0,0,0-7.45019-4.19l-99.61963,27.86a6.06838,6.06838,0,0,0-4.37012,6.57h25.79l7.15967-2,74.30029-20.78A6.05544,6.05544,0,0,0,619.77747,380.56005Z"
              transform="translate(-316.07106 -191.48811)"
              fill="#ccc"
            />
            <path
              d="M876.24147,408.79777H393.241a7.00787,7.00787,0,0,0-7,7v286a7.00755,7.00755,0,0,0,7,7H876.24147a7.00786,7.00786,0,0,0,7-7v-286A7.00818,7.00818,0,0,0,876.24147,408.79777Zm5,293a5.00181,5.00181,0,0,1-5,5H393.241a5.0018,5.0018,0,0,1-5-5v-286a5.00213,5.00213,0,0,1,5-5H876.24147a5.00213,5.00213,0,0,1,5,5Z"
              transform="translate(-316.07106 -191.48811)"
              fill="#3f3d56"
            />
            <path
              d="M440.23744,447.8a12,12,0,1,1,12-12A12.01375,12.01375,0,0,1,440.23744,447.8Zm0-22a10,10,0,1,0,10,10A10.0113,10.0113,0,0,0,440.23744,425.8Z"
              transform="translate(-316.07106 -191.48811)"
              fill="#e11d48"
            />
            <path
              d="M421.58526,435.8a11.00221,11.00221,0,0,1,7.413-10.39858,11,11,0,1,0,0,20.79717A11.00222,11.00222,0,0,1,421.58526,435.8Z"
              transform="translate(-316.07106 -191.48811)"
              fill="#e11d48"
            />
            <path
              d="M488.88112,577.57805a9.01031,9.01031,0,0,1-9-9v-27a9,9,0,0,1,18,0v27A9.01032,9.01032,0,0,1,488.88112,577.57805Z"
              transform="translate(-316.07106 -191.48811)"
              fill="#e11d48"
            />
            <path
              d="M512.88112,577.57805a9.01031,9.01031,0,0,1-9-9v-27a9,9,0,0,1,18,0v27A9.01032,9.01032,0,0,1,512.88112,577.57805Z"
              transform="translate(-316.07106 -191.48811)"
              fill="#e11d48"
            />
            <path
              d="M536.88112,577.57805a9.01031,9.01031,0,0,1-9-9v-27a9,9,0,0,1,18,0v27A9.01032,9.01032,0,0,1,536.88112,577.57805Z"
              transform="translate(-316.07106 -191.48811)"
              fill="#e11d48"
            />
            <path
              d="M573.88112,577.57805a9.01031,9.01031,0,0,1-9-9v-27a9,9,0,0,1,18,0v27A9.01032,9.01032,0,0,1,573.88112,577.57805Z"
              transform="translate(-316.07106 -191.48811)"
              fill="#e11d48"
            />
            <path
              d="M597.88112,577.57805a9.01031,9.01031,0,0,1-9-9v-27a9,9,0,0,1,18,0v27A9.01032,9.01032,0,0,1,597.88112,577.57805Z"
              transform="translate(-316.07106 -191.48811)"
              fill="#e11d48"
            />
            <path
              d="M621.88112,577.57805a9.01031,9.01031,0,0,1-9-9v-27a9,9,0,0,1,18,0v27A9.01032,9.01032,0,0,1,621.88112,577.57805Z"
              transform="translate(-316.07106 -191.48811)"
              fill="#e11d48"
            />
            <path
              d="M658.88112,577.57805a9.01031,9.01031,0,0,1-9-9v-27a9,9,0,0,1,18,0v27A9.01032,9.01032,0,0,1,658.88112,577.57805Z"
              transform="translate(-316.07106 -191.48811)"
              fill="#e11d48"
            />
            <path
              d="M682.88112,577.57805a9.01031,9.01031,0,0,1-9-9v-27a9,9,0,0,1,18,0v27A9.01032,9.01032,0,0,1,682.88112,577.57805Z"
              transform="translate(-316.07106 -191.48811)"
              fill="#e11d48"
            />
            <path
              d="M706.88112,577.57805a9.01031,9.01031,0,0,1-9-9v-27a9,9,0,0,1,18,0v27A9.01032,9.01032,0,0,1,706.88112,577.57805Z"
              transform="translate(-316.07106 -191.48811)"
              fill="#e11d48"
            />
            <path
              d="M743.88112,577.57805a9.01031,9.01031,0,0,1-9-9v-27a9,9,0,0,1,18,0v27A9.01032,9.01032,0,0,1,743.88112,577.57805Z"
              transform="translate(-316.07106 -191.48811)"
              fill="#e11d48"
            />
            <path
              d="M767.88112,577.57805a9.01031,9.01031,0,0,1-9-9v-27a9,9,0,0,1,18,0v27A9.01032,9.01032,0,0,1,767.88112,577.57805Z"
              transform="translate(-316.07106 -191.48811)"
              fill="#e11d48"
            />
            <path
              d="M791.88112,577.57805a9.01031,9.01031,0,0,1-9-9v-27a9,9,0,0,1,18,0v27A9.01032,9.01032,0,0,1,791.88112,577.57805Z"
              transform="translate(-316.07106 -191.48811)"
              fill="#e11d48"
            />
            <path
              d="M549.89914,677.745H420.45883a6.04736,6.04736,0,1,1,0-12.09472H549.89914a6.04736,6.04736,0,1,1,0,12.09472Z"
              transform="translate(-316.07106 -191.48811)"
              fill="#e6e6e6"
            />
            <path
              d="M508.39914,651.745H461.95883a6.04736,6.04736,0,1,1,0-12.09472h46.44031a6.04736,6.04736,0,1,1,0,12.09472Z"
              transform="translate(-316.07106 -191.48811)"
              fill="#e6e6e6"
            />
            <rect
              x="71.81005"
              y="277.08994"
              width="493"
              height="2"
              fill="#3f3d56"
            />
          </svg>
        </EmptyDataProfile>
      )}
    </Card>
  );
};

Payments.propTypes = {};

export default Payments;
