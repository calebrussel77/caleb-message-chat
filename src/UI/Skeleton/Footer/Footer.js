import React from 'react';
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const FooterSkeleton = () => {
    return (
            <SkeletonTheme color="#e2e8f0" highlightColor="#edf2f7">

                <div className="py-6 bg-gray-200 w-full border-t-2 border-gray-400">
                    <div className="block md:flex md:items-center">

                        <div className="block md:w-1/2 md:px-3 lg:px-6 max-w-md w-full px-2 mx-auto">
                            <div className="text-sm md:text-base">
                                <Skeleton count={3} />
                            </div>
                            <div className="flex justify-center">
                                <Skeleton  />
                                <Skeleton  />
                            </div>
                        </div>

                        <div className="px-4 mx-auto max-w-2xl border-t-2 border-gray-500 md:border-none w-full sm:flex items-baseline mt-4 border-t border-gray-200 pt-3 md:border-none md:w-1/2 md:px-3 lg:px-6">
                            <div className="sm:w-1/3">
                                <Skeleton count={2} />
                            </div>

                            <div className="sm:w-1/3 ">
                                <Skeleton count={3} />
                            </div>

                            <div className="sm:w-1/3">
                                <Skeleton count={3} />
                            </div>
                        </div>

                    </div>
                </div>
            </SkeletonTheme>
    );
};

export default FooterSkeleton;