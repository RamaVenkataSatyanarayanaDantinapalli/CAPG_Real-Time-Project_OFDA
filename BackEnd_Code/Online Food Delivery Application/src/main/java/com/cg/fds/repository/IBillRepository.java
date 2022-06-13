package com.cg.fds.repository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.cg.fds.entities.Bill;

@Repository
public interface IBillRepository {
	public Bill addBill(Bill bill);
	public Bill updateBill(Bill bill);
	public Bill removeBill(Bill bill);
	public Bill viewBill(Bill bill);
	public List<Bill> viewBills(LocalDate startDate,LocalDate endDate);
	public List<Bill> viewBills(String custId);
}
