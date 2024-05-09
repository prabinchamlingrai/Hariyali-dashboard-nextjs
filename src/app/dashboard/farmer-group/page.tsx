"use client";
import React, { useEffect, useState } from "react";
import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@/src/components/DataTable";
import PageTitle from "@/src/components/ui/PageTitle";
import AddFarmersButton from "@/src/components/buttons/AddFarmersButton";
import Button from "@/src/components/buttons/button";
import {
  getEntrepreneur,
  getFarmerGroup,
  getMerchant,
} from "@/src/services/apiService/mainService";
import { useForm } from "react-hook-form";
type Props = {};

type Group = {
  groupName: string;
  groupPan: string;
  groupEmail: string;
};
const UsersPage: React.FC<Props> = () => {
  const { register, handleSubmit, watch } = useForm();
  const watchField = watch();
  const [sdata, setData] = useState<Group[]>([]);
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
  //getEntrepreneur
  const [ent, setEnt] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getEntrepreneur(watchField?.merchantId);
        setEnt(response?.data);
        if (response?.data?.length <= 0) {
          setData([]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [watchField?.merchantId]);
  //get farmer data

  console.log(sdata, "mydata");
  useEffect(() => {
    const fetchData = async () => {
      if (watchField?.merchantId && watchField?.entId != "") {
        try {
          const response = await getFarmerGroup(watchField?.entId);
          console.log(response, "myresponse");
          if (response?.status === 200) {
            setData(response?.data);
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };
    fetchData();
  }, [watchField?.entId]);

  return (
    <div className="flex flex-col gap-5 w-full">
      <div className="grid grid-cols-4 mt-5 gap-4">
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
        <div className="flex flex-col">
          <label>Entrepreneur</label>
          <select className="selectStyle" {...register("entId")}>
            <option value={""} selected disabled>
              --Select Entrepreneur--
            </option>
            {ent?.map((item: any, index) => {
              return (
                <option value={item?._id} key={index}>
                  {item?.entName}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <PageTitle title="Farmers" />
        <Button urlName={"/AddFarmerGroup"} buttonName={"Add Farmer Group"} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-1 gap-5 w-full">
        <table>
          <thead>
            <tr className="font-bold">
              <td className="py-2 px-1 border border-gray-300">S.No</td>
              <td className="py-2 px-1 border border-gray-300">Group Name</td>
              <td className="py-2 px-1 border border-gray-300">Email</td>
              <td className="py-2 px-1 border border-gray-300">Pan</td>
              <td className="py-2 px-1 border border-gray-300">Action</td>
            </tr>
          </thead>
          <tbody>
            {sdata.map((item, index) => {
              return (
                <tr key={index} className="transition-all hover:bg-gray-100 ">
                  <td className="py-2 px-1 border border-gray-300">
                    {index + 1}
                  </td>
                  <td className="py-2 px-1 border border-gray-300">
                    {item?.groupName}
                  </td>
                  <td className="py-2 px-1 border border-gray-300">
                    {item?.groupEmail}
                  </td>
                  <td className="py-2 px-1 border border-gray-300">
                    {item?.groupPan}
                  </td>
                  <td className="py-2 px-1 border border-gray-300">{""}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersPage;
