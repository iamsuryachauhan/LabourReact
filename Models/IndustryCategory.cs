using System;
using System.Collections.Generic;

namespace LabourReact.Models;

public partial class IndustryCategory
{
    public int IndustryId { get; set; }

    public string? IndustryType { get; set; }

    public byte? Active { get; set; }
}
