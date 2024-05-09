"use client";
import React, { useEffect, useState } from "react";
import { Pagination } from "@mui/material";
import { useForm } from "react-hook-form";
import PageTitle from "@/src/components/ui/PageTitle";
import AddEntrepreneurButton from "@/src/components/buttons/AddEntrepreneurButton";
import {
  getEntrepreneur,
  getMerchant,
} from "@/src/services/apiService/mainService";

type Props = {};

type Entrepreneur = {
  entName: string;
  entPan: string;
  entEmail: string;
};

const UsersPage: React.FC<Props> = () => {
  const { register, watch } = useForm();
  const watchField = watch();
  //get merchant
  const [merchant, setMerchant] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getMerchant();
        setMerchant(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  const [sdata, setData] = useState<Entrepreneur[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      if (watchField?.merchantId != "") {
        try {
          const response = await getEntrepreneur(watchField?.merchantId);
          if (response?.status === 200) {
            setData(response?.data);
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };
    fetchData();
  }, [watchField?.merchantId]);

  return (
    <div className="flex flex-col gap-5 w-full px-7">
      <div className="grid grid-cols-4 mt-5">
        <div className="flex flex-col">
          <label>Merchant</label>
          <select className="selectStyle" {...register("merchantId")}>
            <option value={""} selected disabled>
              --Select Merchant--
            </option>
            {merchant?.map((item: any, index) => {
              return (
                <option value={item?._id} key={index}>
                  {item?.merchantName}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <PageTitle title="Entrepreneur" />
        <AddEntrepreneurButton />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-1 gap-5 w-full">
        <table>
          <thead>
            <tr className="font-bold">
              <td className="py-2 px-1 border border-gray-300">S.No</td>
              <td className="py-2 px-1 border border-gray-300">
                Entrepreneur Name
              </td>
              <td className="py-2 px-1 border border-gray-300">Email</td>
              <td className="py-2 px-1 border border-gray-300">Pan</td>
              <td className="py-2 px-1 border border-gray-300">Action</td>
            </tr>
          </thead>
          <tbody>
            {sdata.length > 0 ? (
              sdata.map((item, index) => {
                return (
                  <tr key={index} className="transition-all hover:bg-gray-100 ">
                    <td className="py-2 px-1 border border-gray-300">
                      {index + 1}
                    </td>
                    <td className="py-2 px-1 border border-gray-300">
                      {item?.entName}
                    </td>
                    <td className="py-2 px-1 border border-gray-300">
                      {item?.entEmail}
                    </td>
                    <td className="py-2 px-1 border border-gray-300">
                      {item?.entPan}
                    </td>
                    <td className="py-2 px-1 border border-gray-300">{""}</td>
                  </tr>
                );
              })
            ) : (
              <tr className="transition-all hover:bg-gray-100 ">
                <td colSpan={5} className="text-center">
                  No Data
                </td>
              </tr>
            )}
          </tbody>
        </table>
        
      </div>
    </div>
  );
};

export default UsersPage;
