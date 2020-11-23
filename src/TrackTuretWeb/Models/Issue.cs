using System;
using System.ComponentModel.DataAnnotations;

namespace TrackTuretWeb.Models
{
    public class Issue
    {
        public int IssueId { get; set; }
        
        [Required]
        [StringLength(25)]
        public string Summary { get; set; }
        
        [StringLength(250)]
        public string Description { get; set; }
        
        [DataType(DataType.DateTime)]
        public DateTime CreatedDate { get; set; }
    }
}