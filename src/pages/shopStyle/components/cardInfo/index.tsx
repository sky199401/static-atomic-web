import * as React from "react";

interface Props {}

export default function CardInfo<T extends Props>({}: T) {
  return (
    <section className="bg-white-500 px-12 flex flex-col">
      {/* 上半部分 */}
      <div className="flex flex-row items-center justify-between pt-12 pb-12">
        <div className="flex flex-row">
          <img
            src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fvsd-picture.cdn.bcebos.com%2Fd5955f7c5893d7e4f885ae98e6cece3f5a0980e6.jpg&refer=http%3A%2F%2Fvsd-picture.cdn.bcebos.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1635131821&t=02be1ad9f2884747aace4dc5112cb549"
            className="w-54 h-54 mr-8 rounded-6"
          />
          <div className="">
            <div className="mt-3 leading-20 max-w-235">
              <span className="mr-6 text-lg text-black">海底捞</span>
              <span className="rounded-6 text-xs text-gray-500  p-4 border-1">
                切换门店
              </span>
            </div>
            <div className="mt-8 text-xs text-gray-500 leading-14">
              <span className=" mr-12">50~100元</span>
              <span className="">中西餐</span>
            </div>
          </div>
        </div>
        <img
          src="https://i.ibb.co/0XKwPQk/Collection-2x.png"
          className="w-21 h-21 mr-3"
        />
      </div>
      <div className="border-top-1"></div>
      {/* 下半部分 */}
      <div className="flex flex-row items-center justify-between mt-12 mb-9">
        <div className="flex flex-row items-center">
          <img
            src="https://i.ibb.co/9rdc0Qh/2x.png"
            className="mr-8 w-10 h-12"
          />
          <span className="inline-block w-272 text-xs text-gray-500 leading-14 truncate">
            北京市海淀区百度科技大厦3层
          </span>
        </div>
        <img
          src="https://i.ibb.co/k5CjtCk/phone-2x.png"
          className="w-21 h-21 mr-3"
        />
      </div>
    </section>
  );
}
