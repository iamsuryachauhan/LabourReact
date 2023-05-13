using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace LabourReact.Models;

public partial class EmployeeDbContext : DbContext
{
    public EmployeeDbContext()
    {
    }

    public EmployeeDbContext(DbContextOptions<EmployeeDbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Company> Companies { get; set; }

    public virtual DbSet<Department> Departments { get; set; }

    public virtual DbSet<Employee> Employees { get; set; }

    public virtual DbSet<IndustryCategory> IndustryCategories { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Data Source=.\\SQLEXPRESS;Initial Catalog=EmployeeDB;TrustServerCertificate=True;Trusted_Connection=True");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Company>(entity =>
        {
            entity
                .HasNoKey()
                .ToTable("Company");

            entity.Property(e => e.CompanyId).ValueGeneratedOnAdd();
            entity.Property(e => e.CompanySize).HasMaxLength(100);
        });

        modelBuilder.Entity<Department>(entity =>
        {
            entity
                .HasNoKey()
                .ToTable("Department");

            entity.Property(e => e.DepartmentId).ValueGeneratedOnAdd();
            entity.Property(e => e.DepartmentName)
                .HasMaxLength(500)
                .IsUnicode(false);
        });

        modelBuilder.Entity<Employee>(entity =>
        {
            entity.HasKey(e => e.EmployeeId).HasName("PK__Employee__7AD04F11773F21E6");

            entity.ToTable("Employee");

            entity.Property(e => e.DateOfJoining).HasColumnType("date");
            entity.Property(e => e.Department)
                .HasMaxLength(500)
                .IsUnicode(false);
            entity.Property(e => e.EmployeeName)
                .HasMaxLength(500)
                .IsUnicode(false);
            entity.Property(e => e.PhotoFileName)
                .HasMaxLength(500)
                .IsUnicode(false);
        });

        modelBuilder.Entity<IndustryCategory>(entity =>
        {
            entity
                .HasNoKey()
                .ToTable("IndustryCategory");

            entity.Property(e => e.IndustryId).ValueGeneratedOnAdd();
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
