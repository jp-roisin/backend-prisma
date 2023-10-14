/*
  Warnings:

  - A unique constraint covering the columns `[registrationNumber]` on the table `Franchise` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Franchise_registrationNumber_key" ON "Franchise"("registrationNumber");
