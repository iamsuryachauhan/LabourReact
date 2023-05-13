using System;
using System.Collections.Generic;

namespace LabourReact.Models;

public partial class Company
{
    public int CompanyId { get; set; }

    public string? CompanyName { get; set; }

    public string? IndustryType { get; set; }

    public string? CompanySize { get; set; }

    public int? NumberOfEmployees { get; set; }

    public int? CompanyMarketValue { get; set; }

    public byte? Active { get; set; }
}
